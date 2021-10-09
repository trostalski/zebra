import React from "react";
import { FieldHookConfig, useField } from "formik";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Wrapper } from "./Wrapper";

type InputFieldProps = (string | FieldHookConfig<any>) & {
  name: string;
  label: string;
  placeholder: string;
};

export const InputField: React.FC<InputFieldProps> = (props) => {
  const [field, { error }] = useField(props);
  return (
    <Wrapper>
      <FormControl isInvalid={!!error}>
        <FormLabel htmlFor={props.label}>{props.label}</FormLabel>
        <Input {...field} id={field.name} placeholder={props.placeholder} />
        {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
      </FormControl>
    </Wrapper>
  );
};
