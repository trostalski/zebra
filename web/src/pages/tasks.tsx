import { Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { NavBar } from "../components/NavBar";
import { TaskTable } from "../components/TaskTable";

interface tasksProps {}

const tasks: React.FC<tasksProps> = ({}) => {
  return (
    <Flex>
      <NavBar />
      <Flex
        left="20%"
        position="absolute"
      >
        <TaskTable />
      </Flex>
    </Flex>
  );
};

export default tasks;
