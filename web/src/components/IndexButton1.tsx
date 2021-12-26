import { Button, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

interface IndexButton1Props {
  left?: boolean;
  right?: boolean;
  icon?: JSX.Element;
  description?: string;
  link: string;
}

const IndexButton1: React.FC<IndexButton1Props> = ({
  left,
  right,
  icon,
  description,
  link,
}) => {
  const router = useRouter();

  return (
    <Button
      ml={left ? "20" : "0"}
      mr={right ? "20" : "0"}
      bgColor="white"
      rounded="3xl"
      flexDir="column"
      align="center"
      justify="center"
      h="56vh"
      w="18vw"
      _hover={{
        transition: "transform .2s",
        transform: "scale(1.05)",
        color: "orange",
      }}
      onClick={() => {
        router.push(link);
      }}
    >
      {icon}
      <Text mt={4} fontSize={32}>
        {description}
      </Text>
    </Button>
  );
};

export default IndexButton1;
