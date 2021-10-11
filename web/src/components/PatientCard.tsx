import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

export const PatientCard = ({ title, desc, ...rest }) => {
  return (
    <Box
      bg="white"
      p={5}
      shadow="md"
      borderWidth="1px"
      borderRadius="md"
      {...rest}
    >
      <Heading fontSize="xl">{title}</Heading>
      <Text mt={4}>{desc}</Text>
    </Box>
  );
};
