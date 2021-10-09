import { Flex, Heading, Icon, Text as Link } from "@chakra-ui/react";
import React from "react";
import { BsFillFilePersonFill } from "react-icons/bs";
import { AiFillSetting, AiFillNotification } from "react-icons/ai";
import { FaProcedures } from "react-icons/fa";

const Index = () => (
  <Flex h="100vh" maxW="2000px" flexDir="column" overflow="hidden" bg="gray.50">
    {/* far left column */}
    <Flex
      w="20vw"
      flexDirection="column"
      alignItems="center"
      overflow="hidden"
      bg="black"
      h="100vh"
      color="white"
    >
      <Flex flexDir="column" as="nav">
        <Heading mt={50} letterSpacing="thight" alignSelf="center">
          Zebra.
        </Heading>
        <Flex
          h="40vh"
          mt={20}
          ml={8}
          flexDirection="column"
          justifyContent="space-between"
        >
          <Flex flexDirection="row" alignItems="center">
            <Icon as={BsFillFilePersonFill} fontSize="2xl" mr={6} />
            <Link>Patienten</Link>
          </Flex>
          <Flex flexDirection="row" alignItems="center">
            <Icon as={FaProcedures} fontSize="2xl" mr={6} />
            <Link>Untersuchungen</Link>
          </Flex>
          <Flex flexDirection="row" alignItems="center">
            <Icon as={AiFillNotification} fontSize="2xl" mr={6} />
            <Link>Benachrichtigungen</Link>
          </Flex>
          <Flex flexDirection="row" alignItems="center">
            <Icon as={AiFillSetting} fontSize="2xl" mr={6} />
            <Link>Einstellungen</Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
    <Flex
      flexDirection="column"
      alignItems="center"
      w="80vw"
      overflow="hidden"
    ></Flex>
  </Flex>
);

export default Index;
