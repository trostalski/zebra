import { ArrowBackIcon, HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

interface HeaderBarProps {
  workspace?: string;
  user: string;
}

export const HeaderBar: React.FC<HeaderBarProps> = ({
  children,
  workspace,
  user,
}) => {
  const router = useRouter();

  return (
    <Flex
      bgColor={workspace == "index" ? "bgGreen" : "bgWhite"}
      position="fixed"
      shadow="md"
      flexDir="row"
      align="center"
      justify="space-between"
      width="100%"
      height="10vh"
      zIndex="9999"
    >
      {workspace == "index" ? (
        <HamburgerIcon ml={8} boxSize={10} />
      ) : (
        <Button
          ml={8}
          w={4}
          bgColor="white"
          _hover={{
            transition: "transform .2s",
            transform: "scale(1.1)",
            color: "orange",
          }}
          onClick={() => {
            router.back();
          }}
        >
          <ArrowBackIcon boxSize={10} />
        </Button>
      )}
      <InputGroup w="40vw" rounded="3xl" size="lg" shadow="md" bgColor="white">
        <Input rounded="3xl" placeholder="Suchen"></Input>
        <InputRightElement
          rounded="3xl"
          children={<SearchIcon boxSize={6} color="gray.500" />}
        ></InputRightElement>
      </InputGroup>
      <Text fontFamily="roboto" mr={8} fontSize={20} fontWeight="bold">
        {user}
      </Text>
    </Flex>
  );
};
