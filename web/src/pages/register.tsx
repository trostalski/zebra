import React from "react";
import { Form, Formik } from "formik";
import { InputField } from "../components/InputField";
import { useRegisterMutation } from "../generated/graphql";
import { Button, Flex } from "@chakra-ui/react";

interface RegisterProps {}

const Register: React.FC<RegisterProps> = () => {
  const [, register] = useRegisterMutation();
  return (
    <Flex justifyContent="center">
      <Formik
        initialValues={{
          username: "",
          email: "",
          firstname: "",
          lastname: "",
          password: "",
          department: "",
          position: "",
        }}
        onSubmit={async (values) => {
          await register({ registerUserdata: values });
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name="username"
              label="Benutzername"
              placeholder="Benutzername"
            />
            <InputField name="email" label="email" placeholder="email" />
            <InputField
              name="firstname"
              label="Vorname"
              placeholder="Vorname"
            />
            <InputField
              name="lastname"
              label="Nachname"
              placeholder="Nachname"
            />
            <InputField
              name="password"
              label="password"
              placeholder="password"
            />
            <InputField
              name="department"
              label="Abteilung"
              placeholder="Abteilung"
            />
            <InputField
              name="position"
              label="Position"
              placeholder="Position"
            />

            <Button mt={4} type="submit" isLoading={isSubmitting} color="teal">
              register
            </Button>
          </Form>
        )}
      </Formik>
    </Flex>
  );
};

export default Register;
