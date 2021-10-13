import React from "react";
import { Form, Formik } from "formik";
import { InputField } from "../components/InputField";
import { useLoginMutation } from "../generated/graphql";
import { Button, Flex } from "@chakra-ui/react";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const [, login] = useLoginMutation();
  return (
    <Flex justifyContent="center">
      <Formik
        initialValues={{
          emailOrUsername: "",
          password: "",
        }}
        onSubmit={async (values) => {
          await login({
            loginUsernameOrEmail: values.emailOrUsername,
            loginPassword: values.password,
          });
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name="emailOrUsername"
              label="email oder benutzername"
              placeholder="email oder benutzername"
            />
            <InputField
              type="password"
              name="password"
              label="password"
              placeholder="password"
            />
            <Button mt={4} type="submit" isLoading={isSubmitting} color="teal">
              login
            </Button>
          </Form>
        )}
      </Formik>
    </Flex>
  );
};

export default Login;
