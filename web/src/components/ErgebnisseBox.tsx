import { Flex } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/react";
import React from "react";
interface ErgebnisseBoxProps {}

export const ErgebnisseBox: React.FC<ErgebnisseBoxProps> = ({}) => {
  return (
    <Box
      mt={4}
      w="32vw"
      h="35vh"
      bgColor="white"
      overflowY="auto" // enables scrolling for y-overflow
      rounded="3xl"
      color="#000000"
    ></Box>
  );
};
