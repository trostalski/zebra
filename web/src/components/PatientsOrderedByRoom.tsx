import {
  Box,
  Heading,
  Flex,
  Button,
  Text,
  useDisclosure,
  SimpleGrid,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  useListPatientsQuery,
  usePatientRoomsQuery,
} from "../generated/graphql";
import { PatientModal } from "./PatientModal";

interface PatientButtonProps {}

export const PatientButton: React.FC<PatientButtonProps> = ({}) => {
  const [{ data: roomsData, fetching: roomFetching }] = usePatientRoomsQuery();
  const [{ data: patientsData, fetching: patientFetching }] =
    useListPatientsQuery();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentPatient, setCurrentPatient] = useState(0);

  return (
    <SimpleGrid columns={2} spacing={8}>
      {roomsData!.patientRooms.map((r) =>
        !r ? null : (
          <Box
            rounded="lg"
            bg="white"
            p={4}
            w={"30vw"}
            borderWidth={1}
            shadow={"md"}
          >
            <Heading fontSize="xl" mb={4}>
              Zimmer: {r}
            </Heading>
            {patientsData!.listPatients.map((p, i) =>
              !p ? null : p.room == r ? (
                <Flex alignContent="center" flexDirection="column" p={2}>
                  <Button
                    onClick={() => {
                      onOpen();
                      setCurrentPatient(i);
                    }}
                  >
                    <Text mr="auto">{p.firstname + " " + p.lastname} </Text>

                    <Text mr="left">Alter: {p.age} </Text>
                  </Button>
                </Flex>
              ) : null
            )}
            <PatientModal
              patient={patientsData!.listPatients[currentPatient]}
              isOpen={isOpen}
              onClose={onClose}
            />
          </Box>
        )
      )}
    </SimpleGrid>
  );
};
