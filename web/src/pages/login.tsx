import React from "react";
import { Form, Formik } from "formik";
import { InputField } from "../components/InputField";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  return (
    <Formik
      initialValues={{}}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ values, handleChange }) => (
        <Form>
          <InputField name="email" label="email" placeholder="email" />
          <InputField type="password" name="password" label="password" placeholder="password" />
        </Form>
      )}
    </Formik>
  );
};

export default Login;
