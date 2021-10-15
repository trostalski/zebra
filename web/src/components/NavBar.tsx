import { Box, Flex, Heading, Icon, Link } from "@chakra-ui/react";
import React from "react";
import { AiFillNotification, AiFillSetting } from "react-icons/ai";
import { BsFillFilePersonFill } from "react-icons/bs";
import { FaProcedures } from "react-icons/fa";
import { useLogoutMutation, useMeQuery } from "../generated/graphql";
import { useRouter } from "next/router";
import NextLink from "next/link";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const [, logout] = useLogoutMutation();
  const [{ data: me }] = useMeQuery();
  const router = useRouter();
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
          <NextLink href="/">
            <Flex flexDirection="row" alignItems="center">
              <Icon as={BsFillFilePersonFill} fontSize="2xl" mr={6} />
              <Link>Patienten</Link>
            </Flex>
          </NextLink>
          <Flex flexDirection="row" alignItems="center">
            <Icon as={FaProcedures} fontSize="2xl" mr={6} />
            <NextLink href="/tasks">
              <Link>Untersuchungen</Link>
            </NextLink>
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
        <Flex alignSelf="center" position="absolute" bottom={10} p={2}>
          <Box textAlign="center" w={20} h={5}>
            <Link>{me?.me?.username}</Link>
          </Box>
          <Box textAlign="center" w={20} h={5}>
            <NextLink href="/login">
              <Link
                onClick={() => {
                  logout();
                }}
              >
                Logout
              </Link>
            </NextLink>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};
