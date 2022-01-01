import {
  Box,
  Button,
  Drawer,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  useListPatientsStationQuery,
  usePatientRoomsQuery,
} from "../generated/graphql";
import { PatientDrawer } from "./PatientDrawer";

interface StationPatientBox {}

export const StationPatientBox: React.FC<StationPatientBox> = ({}) => {
  // get patients room
  const [{ data: patientRooms }] = usePatientRoomsQuery();

  // get patient id, firstname, lastname, room, age
  const [{ data: listPatientsStation }] = useListPatientsStationQuery();

  // drawer logic
  const { isOpen, onOpen, onClose } = useDisclosure();

  // save Patient to show in drawer
  const [openPatient, setOpenPatient] = useState(0);

  return (
    <>
      <SimpleGrid columns={2} spacingX="20" spacingY="6">
        {patientRooms?.patientRooms?.map((r) =>
          !r ? null : (
            <Box
              key={r}
              rounded="3xl"
              bg="white"
              p={4}
              w={"40vw"}
              shadow={"lg"}
            >
              <Heading ml={4} fontSize="l" mb={4}>
                Zimmer: {r}
              </Heading>
              {listPatientsStation?.listPatients?.map((p) =>
                !p ? null : p.room == r ? (
                  <Flex key={p.id} flexDirection="column" p={2}>
                    <Button
                      bgColor="white"
                      rounded="3xl"
                      borderWidth="1px"
                      _hover={{
                        borderColor: "orange",
                        borderWidth: "2px",
                      }}
                      onClick={() => {
                        onOpen();
                        setOpenPatient(p.id!);
                      }}
                    >
                      <Text mr="auto">{p.firstname + " " + p.lastname} </Text>
                      <Text mr="left">Alter: {p.age} </Text>
                    </Button>
                  </Flex>
                ) : null
              )}
            </Box>
          )
        )}
        ;
      </SimpleGrid>
      <PatientDrawer
        patientId={openPatient}
        show={isOpen}
        handleClose={onClose}
      />
    </>
  );
};
