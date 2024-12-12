"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RegisterDto, RegisterUserMutation } from "@/gql/graphql";
import { Formik } from "formik";
import { InputField } from "./InputField";
import * as Yup from "yup";
import { useMutation } from "@apollo/client";
import { useUserStore } from "@/stores/userStore";
import { useRouter } from "next/navigation";
import React from "react";
import { GraphQLErrorExtensions } from "graphql";
import { REGISTER_USER } from "@/graphql/mutations/Register";
import Cookies from "js-cookie";

const initialValues: RegisterDto = {
  email: "",
  fullname: "",
  password: "",
  confirmPassword: "",
};

const RegisterSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
  fullname: Yup.string()
    .required("Full Name is required")
    .min(8, "Full Name must be at least 8 characters"),
  confirmPassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

export function RegisterForm() {
  const setUser = useUserStore((state) => state.setUser);

  const router = useRouter();

  const [registerUser, { loading }] =
    useMutation<RegisterUserMutation>(REGISTER_USER);

  const [Errors, setErrors] = React.useState<GraphQLErrorExtensions>({});

  const handleSubmit = async (
    values: RegisterDto,
  ) => {
    setErrors({});
    await registerUser({
      variables: {
        email: values.email,
        password: values.password,
        fullname: values.fullname,
        confirmPassword: values.confirmPassword,
      },
      onCompleted: (data) => {
        setErrors({});
        console.log(data);
        if (data?.register.user) {
          setUser({
            id: data.register.user.id,
            email: data.register.user.email,
            fullname: data.register.user.fullname,
          });
        }
        router.push("/dashboard");
      },
    }).catch((error) => {
      console.log(error.graphQLErrors, "ERROR")
      setErrors(error.graphQLErrors[0]?.extensions);
    });
  };

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">
          Register
        </CardTitle>
        <CardDescription>
          Enter your details below to register for an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={RegisterSchema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form className="grid gap-4" onSubmit={handleSubmit}>
              <InputField
                error={errors.email || Errors?.email as string}
                showError={touched.email}
                type="text"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="m@example.com"
                value={values.email}
              />
              <InputField
                error={errors.fullname || Errors?.fullname as string}
                showError={touched.fullname}
                type="text"
                name="fullname"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="John doe"
                value={values.fullname}
              />
              <InputField
                error={errors.password || Errors?.password as string}
                showError={touched.password}
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="*********"
                value={values.password}
              />
              <InputField
                error={errors.confirmPassword || Errors?.confirmPassword as string}
                showError={touched.confirmPassword}
                type="password"
                name="confirmPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="*********"
                value={values.confirmPassword}
              />
              <Button type="submit" className="w-full" disabled={loading}>
                Register
              </Button>
            </form>
          )}
        </Formik>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
