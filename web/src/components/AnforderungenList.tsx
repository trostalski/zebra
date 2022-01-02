import { Flex } from "@chakra-ui/layout";
import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  useListPatientTasksQuery,
  usePatientTaskRoomsQuery,
} from "../generated/graphql";
import { PatientDrawer } from "./PatientDrawer";

interface AnforderungenListProps {}

const AnforderungenList: React.FC<AnforderungenListProps> = ({}) => {
  // get patients room
  const [{ data: patientTaskRooms }] = usePatientTaskRoomsQuery();

  const [{ data: listPatientTasks }] = useListPatientTasksQuery();

  // drawer logic
  const { isOpen, onOpen, onClose } = useDisclosure();

  // save Patient to show in drawer
  const [openPatient, setOpenPatient] = useState(0);

  return (
    <Flex flexDir="column">
      <Flex flexDir="row" color="gray.500" mb={4}>
        <Text pos="sticky" left="16%">
          Patient
        </Text>
        <Text pos="sticky" left="35%">
          Untersuchung
        </Text>
        <Text pos="sticky" left="56%">
          Erstellt
        </Text>
        <Text pos="sticky" left="70%">
          Durch
        </Text>
      </Flex>
      <SimpleGrid columns={1} spacingY={2}>
        {patientTaskRooms?.patientTaskRooms?.map((r) =>
          !r ? null : (
            <Box
              key={r}
              rounded="3xl"
              bg="white"
              p={4}
              w={"80vw"}
              shadow={"lg"}
            >
              <Heading ml={4} fontSize="l" mb={4}>
                Zimmer: {r}
              </Heading>
              {listPatientTasks?.listPatientTasks?.map((p) =>
                !p ? null : p.forPatient.room == r ? (
                  <Flex key={p.id} flexDirection="column" p={2}>
                    <Flex
                      bgColor="white"
                      as="button"
                      h={10}
                      rounded="3xl"
                      borderWidth="1px"
                      align="center"
                      _hover={{
                        borderColor: "orange",
                        borderWidth: "2px",
                      }}
                      onClick={() => {
                        onOpen();
                        setOpenPatient(p.forPatient.id!);
                      }}
                    >
                      <Text pos="sticky" left="16%">
                        {p.forPatient.firstname + " " + p.forPatient.lastname}{" "}
                      </Text>
                      <Text pos="sticky" left="35%">
                        {p.parentTask.name}
                      </Text>
                      <Text pos="sticky" left="56%">
                        {p.timepoint}
                      </Text>
                      <Text pos="sticky" left="70%">{p.creatorUser.lastname}</Text>
                    </Flex>
                  </Flex>
                ) : null
              )}
            </Box>
          )
        )}
      </SimpleGrid>
      <PatientDrawer
        patientId={openPatient}
        show={isOpen}
        handleClose={onClose}
      />
    </Flex>
  );
};

export default AnforderungenList;
