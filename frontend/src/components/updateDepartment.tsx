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
import { Department, DepartmentDto } from "@/gql/graphql";
import { Formik } from "formik";
import { InputField } from "./InputField";
import { useState } from "react";
import { PencilIcon } from "lucide-react";
import { useMutation } from "@apollo/client";
import * as Yup from "yup"
import { GET_DEPARTMENTS } from "@/graphql/quaries/GetDepartments";
import { UPDATE_DEPARTMENT } from "@/graphql/mutations/updateDepartment";

interface props {
  name: string;
  id: string
}

const UpdateDepartment = ({ name, id }: props) => {
  const initialData = {
    name: name || "",
  };

  const [updateDepartment, { loading }] = useMutation(UPDATE_DEPARTMENT);
  const handleSubmit = async (values: DepartmentDto) => {
    console.log(values);
    await updateDepartment({
      variables: {
        id: id,
        name: values.name,
      },
      refetchQueries: [{ query: GET_DEPARTMENTS }],
    }).catch((error) => {
      console.log(error);
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"} size={"icon"}>
          <PencilIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update Department</DialogTitle>
          <DialogDescription>
            Fill out the form below to update the department
          </DialogDescription>
        </DialogHeader>
        <Formik
          initialValues={initialData}
          onSubmit={handleSubmit}
          validationSchema={Yup.object().shape({
            name: Yup.string().required("Department Name is required"),
          })}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
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

export default UpdateDepartment;
