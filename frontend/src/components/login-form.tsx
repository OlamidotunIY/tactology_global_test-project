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
import { LoginDto, LoginUserMutation } from "@/gql/graphql";
import { Formik } from "formik";
import { InputField } from "./InputField";
import * as Yup from "yup";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "@/graphql/mutations/Login";
import { useUserStore } from "@/stores/userStore";
import { useRouter } from "next/navigation";
import React from "react";
import { GraphQLErrorExtensions } from "graphql";
import Cookies from "js-cookie";
import { Loader2 } from "lucide-react";

const initialValues: LoginDto = {
  username: "",
  password: "",
};

const LoginSchema = Yup.object().shape({
  username: Yup.string().min(2, "").required("Username is required"),
  password: Yup.string().required("Password is required"),
});

export function LoginForm() {
  const setUser = useUserStore((state) => state.setUser);

  const router = useRouter();

  const [loginUser, { loading, error, data }] =
    useMutation<LoginUserMutation>(LOGIN_USER);

  const [errors, setErrors] = React.useState<GraphQLErrorExtensions>({});
  const [invalidCredentials, setInvalidCredentials] = React.useState("");

  const handleSubmit = async (values: LoginDto) => {
    setErrors({});
    await loginUser({
      variables: {
        username: values.username,
        password: values.password,
      },
      onCompleted: (data) => {
        setErrors({});
        if (data?.login.user) {
          setUser({
            id: data.login.user.id,
            username: data.login.user.username,
          });
        }
        router.push("/dashboard");
      },
    }).catch((error) => {
      console.log(error.graphQLErrors, "ERROR");
      setErrors(error.graphQLErrors[0]?.extensions);
      if (error.graphQLErrors[0]?.extensions?.invalidCredentials) {
        setInvalidCredentials(
          error.graphQLErrors[0]?.extensions?.invalidCredentials
        );
      }
    });
  };

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div>
          <span className="text-red-600 text-xs">{invalidCredentials}</span>
        </div>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={LoginSchema}
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
                error={errors.username || (errors?.username as string)}
                showError={touched.username}
                type="text"
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="JohnD"
                value={values.username}
              />
              <InputField
                error={errors.password || (errors?.password as string)}
                showError={touched.password}
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="*********"
                value={values.password}
              />
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" />
                    Logging in
                  </>
                ) : (
                  "Login"
                )}
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
