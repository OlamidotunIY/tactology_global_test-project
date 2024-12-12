"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DepartmentDto } from "@/gql/graphql";
import { FieldArray, Formik } from "formik";
import { InputField } from "./InputField";
import { useState } from "react";
import { LucideTrash, PlusIcon, Trash } from "lucide-react";
import { useMutation } from "@apollo/client";
import { CREATE_DEPARTMENT } from "@/graphql/mutations/createDepartment";
import { GET_DEPARTMENTS } from "@/graphql/quaries/GetDepartments";
import * as Yup from "yup"

const initialData: DepartmentDto = {
  name: "",
  subDepartment: [],
};

const CreateDepartment = () => {
  const [text, setText] = useState("");
  const [active, setActive] = useState(false);

  const [createDepartment, { loading }] = useMutation(CREATE_DEPARTMENT);
  const handleSubmit = async (values: DepartmentDto) => {
    console.log(values);
    await createDepartment({
      variables: {
        name: values.name,
        subDepartment: values.subDepartment,
      },
      refetchQueries: [{ query: GET_DEPARTMENTS }],
    }).catch((error) => {
      console.log(error);
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create Department</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Department</DialogTitle>
          <DialogDescription>
            Fill out the form below to create a new department
          </DialogDescription>
        </DialogHeader>
        <Formik
          initialValues={initialData}
          onSubmit={handleSubmit}
          validationSchema={Yup.object().shape({
            name: Yup.string().required("Department Name is required").min(2, "Sub Department Name must be at least 2 characters long"),
            subDepartment: Yup.array().of(
              Yup.object().shape({
                name: Yup.string().required("Sub Department Name is required").min(2, "Sub Department Name must be at least 2 characters long")
              })
            ),
          })}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            /* and other goodies */
          }) => (
            <form className="grid gap-4" onSubmit={handleSubmit}>
              <InputField
                error={errors.name || (errors?.name as string)}
                showError={touched.name}
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Department Name"
                value={values.name}
              />

              <FieldArray name="subDepartment">
                {({ push, remove }) => (
                  <div className="w-full">
                    <div className="grid gap-2">
                      {values.subDepartment?.map((sub, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="text-xs">{sub.name}</div>
                          <div onClick={() => remove(index)}>
                            <LucideTrash className="text-red-700 w-3 h-3 cursor-pointer" />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div>
                      <div className="w-full justify-between flex items-center">
                        <h1>Sub Department</h1>
                        <Button
                          variant={"default"}
                          onClick={() => setActive(true)}
                          type="button"
                          size={"icon"}
                        >
                          <PlusIcon />
                        </Button>
                      </div>
                      <div className="mt-3">
                        {active && (
                          <div>
                            <InputField
                              error={errors.name || (errors?.name as string)}
                              showError={touched.name}
                              type="text"
                              name="name"
                              onChange={(e) => setText(e.target.value)}
                              onBlur={handleBlur}
                              placeholder="Sub Department Name"
                              value={text}
                            />
                            <div className="mt-3">
                              <Button
                                onClick={() => {
                                  push({ name: text });
                                  setActive(false);
                                  setText("");
                                }}
                                type="button"
                              >
                                Add Sub Department
                              </Button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </FieldArray>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};

export default CreateDepartment;
