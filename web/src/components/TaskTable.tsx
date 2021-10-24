import {
  Button, Table, Tbody,
  Td, Th, Thead,
  Tr, useDisclosure
} from "@chakra-ui/react";
import React from "react";
import { ANKLEBRACHIALINDEX } from "../constants";
import {
  useDeletePatientTaskMutation,
  useListPatientTasksQuery
} from "../generated/graphql";
import { AnkleBrachialIndexModal } from "./AnkleBrachialIndexModal";
import { PatientModal } from "./PatientModal";
import { TaskModal } from "./TaskModal";

interface TaskTableProps {}

export const TaskTable: React.FC<TaskTableProps> = ({}) => {
  const [{ data, fetching }] = useListPatientTasksQuery();

  const {
    isOpen: taskIsOpen,
    onOpen: taskOnOpen,
    onClose: taskOnClose,
  } = useDisclosure();

  const {
    isOpen: patientIsOpen,
    onOpen: patientOnOpen,
    onClose: patientOnClose,
  } = useDisclosure();

  const {
    isOpen: ankleBrachialIndexIsOpen,
    onOpen: ankleBrachialIndexOnOpen,
    onClose: ankleBrachialIndexOnClose,
  } = useDisclosure();

  const [, deletePatient] = useDeletePatientTaskMutation();

  return (
    <Table variant="simple" size="lg" w="80vw">
      {/* <TableCaption>What is up my Bitch ass goats???</TableCaption> */}
      <Thead>
        <Tr>
          <Th>Patient</Th>
          <Th>Untersuchung</Th>
          <Th>Erstellt von</Th>
          <Th>Kommentar</Th>
          <Th>Bearbeiten</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data?.listPatientTasks?.map((d) =>
          !d ? null : (
            <Tr key={d.id}>
              <Td>
                <Button
                  onClick={() => {
                    patientOnOpen();
                  }}
                >
                  {d.forPatient.firstname + " " + d.forPatient.lastname}
                </Button>
                <PatientModal
                  patient={d.forPatient}
                  isOpen={patientIsOpen}
                  onClose={patientOnClose}
                />
              </Td>
              <Td>
                <Button
                  onClick={() => {
                    taskOnOpen();
                  }}
                >
                  {d.parentTask.name}
                </Button>
                <TaskModal
                  task={d.parentTask}
                  isOpen={taskIsOpen}
                  onClose={taskOnClose}
                />{" "}
              </Td>
              <Td> {d.creatorUser.firstname + " " + d.creatorUser.lastname}</Td>
              <Td></Td>
              <Td>
                <Button
                  mr={4}
                  colorScheme="green"
                  onClick={() => {
                    switch (d.parentTask.id) {
                      case ANKLEBRACHIALINDEX:
                        ankleBrachialIndexOnOpen();
                        break;

                      default:
                        break;
                    }
                  }}
                >
                  Eintragen
                </Button>
                <AnkleBrachialIndexModal
                  patientTask={d}
                  isOpen={ankleBrachialIndexIsOpen}
                  onClose={ankleBrachialIndexOnClose}
                />
                <Button
                  colorScheme="red"
                  onClick={() => {
                    deletePatient({ patientTaskId: d.id });
                    window.location.reload();
                  }}
                >
                  Löschen
                </Button>
              </Td>
            </Tr>
          )
        )}
      </Tbody>
    </Table>
  );
};
