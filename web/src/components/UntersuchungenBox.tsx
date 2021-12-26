import { Box, Center, Flex, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { usePatientAnforderungenQuery } from "../generated/graphql";

type ErgebnisseProps = {
  patientId: number;
};

export const ErgebnisseBox: React.FC<ErgebnisseProps> = ({
  patientId,
  children,
}) => {
  const [{ data, fetching, stale, error, operation }] =
    usePatientAnforderungenQuery({
      variables: { input: patientId },
      requestPolicy: "cache-and-network",
    });
  console.log("data", data);
  error ? console.log("error", error) : null;

  return (
    <Box
      w="60vw"
      h="25vh"
      bgColor="white"
      overflowY="auto" // enables scrolling for y-overflow
      rounded="3xl"
      color="#000000"
    >
      <Center mt={2}>angeforderte Unteruchungen</Center>
      <Flex color="gray">
        <Text>Untersuchung</Text>
        <Text>Ersteller</Text>
        <Text>Zeit</Text>
      </Flex>
      <VStack>
        {data?.patientAnforderungen?.map((d) => (
          <Box
            key={d.id}
            bg="mainWhite"
            w="56vw"
            h={10}
            justifyContent="space-between"
            rounded="2xl"
          >
            {console.log("here we are")}
            {d.parentTask.name}
            {d.creatorUser.lastname}
            {d.timepoint}
          </Box>
        ))}
      </VStack>
    </Box>
  );
};
