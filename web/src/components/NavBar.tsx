import { Flex, Heading, Icon, Link } from "@chakra-ui/react";
import React from "react";
import { AiFillNotification, AiFillSetting } from "react-icons/ai";
import { BsFillFilePersonFill } from "react-icons/bs";
import { FaProcedures } from "react-icons/fa";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <Flex
      position="fixed"
      w="20vw"
      flexDirection="column"
      alignItems="center"
      overflow="hidden"
      bg="blue.700"
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
  );
};
