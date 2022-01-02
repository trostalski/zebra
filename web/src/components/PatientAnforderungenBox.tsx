import { CloseIcon, DeleteIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  useDeletePatientTaskMutation,
  usePatientAnforderungenQuery,
} from "../generated/graphql";

type PatientAnforderungenProps = {
  patientId: number;
};

export const PatientAnforderungenBox: React.FC<PatientAnforderungenProps> = ({
  patientId,
  children,
}) => {

  const [{ data: patientAnforderungen, fetching, error }] =
    usePatientAnforderungenQuery({
      variables: { input: patientId },
    });

  if (error) {
    return <Text>Fehler beim laden der Date.</Text>;
  }

  if (fetching) {
    <Text>loading...</Text>;
  }

  const [, deletePatientTask] = useDeletePatientTaskMutation();

  return (
    <Box
      mt={2}
      w="30vw"
      h="35vh"
      bgColor="white"
      overflowY="auto" // enables scrolling for y-overflow
      rounded="3xl"
      color="#000000"
    >
      <Center mt={2} mb={2} flexDir="row">
        angeforderte Unteruchungen
        <InputGroup
          w="10vw"
          rounded="3xl"
          ml={4}
          size="sm"
          shadow="md"
          bgColor="white"
        >
          <Input rounded="3xl" placeholder="Suchen"></Input>
          <InputRightElement
            rounded="3xl"
            children={<SearchIcon boxSize={4} color="gray.500" />}
          ></InputRightElement>
        </InputGroup>
      </Center>
      <Flex flexDir="row" color="gray.500">
        <Text pos="sticky" left="5%">
          Ersteller
        </Text>
        <Text pos="sticky" left="35%">
          Untersuchung
        </Text>
        <Text pos="sticky" left="65%">
          Zeit
        </Text>
      </Flex>
      {!patientAnforderungen ? (
        <Text>Keine Anforderungen</Text>
      ) : (
        patientAnforderungen!.patientAnforderungen!.map((d) =>
          !d ? (
            <Text>Keine Anforderungen</Text>
          ) : (
            <VStack>
              <Flex
                key={d.id}
                bg="mainWhite"
                w="30vw"
                h={12}
                rounded="2xl"
                fontSize="12"
                align="center"
                mb={2}
                borderWidth={2}
                borderColor={d.urgent ? "red.500" : "gray.300"}
              >
                <Text pos="sticky" left="5%">
                  {d.creatorUser?.lastname}{" "}
                </Text>
                <Text pos="sticky" left="35%">
                  {d.parentTask?.name}{" "}
                </Text>
                <Text pos="sticky" left="65%">
                  {d.timepoint}{" "}
                </Text>
                <IconButton
                  aria-label="delete Anforderung"
                  icon={<CloseIcon boxSize={2} />}
                  variant="outline"
                  pos="sticky"
                  left="88%"
                  boxSize={5}
                  onClick={() => {
                    deletePatientTask({ patientTaskId: d.id! });
                  }}
                ></IconButton>
              </Flex>
            </VStack>
          )
        )
      )}
    </Box>
  );
};
