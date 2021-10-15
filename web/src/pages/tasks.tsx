import { Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { NavBar } from "../components/NavBar";

interface tasksProps {}

const tasks: React.FC<tasksProps> = ({}) => {
  return (
    <Flex>
      <NavBar />
      <Stack spacing={8}> hey </Stack>
    </Flex>
  );
};

export default tasks;
