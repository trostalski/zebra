import React from "react";
import { Form, Formik } from "formik";
import { InputField } from "../components/InputField";

interface RegisterProps {}

const Register: React.FC<RegisterProps> = () => {
  return (
    <Formik
      initialValues={{ }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ values, handleChange }) => (
        <Form>
          <InputField name="vorname" label="Vorname" placeholder="Vorname" />
          <InputField name="nachname" label="Nachname" placeholder="Nachname" />
          <InputField
            name="department"
            label="Abteilung"
            placeholder="Abteilung"
          />
          <InputField name="position" label="Position" placeholder="Position" />

          <InputField name="email" label="email" placeholder="email" />
          <InputField name="password" label="password" placeholder="password" />
        </Form>
      )}
    </Formik>
  );
};

export default Register;
