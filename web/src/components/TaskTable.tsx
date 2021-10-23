import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useListPatientTasksQuery } from "../generated/graphql";
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
  return (
    <Table variant="simple" size="lg" w="80vw">
      {/* <TableCaption>What is up my Bitch ass goats???</TableCaption> */}
      <Thead>
        <Tr>
          <Th>Patient</Th>
          <Th>Untersuchung</Th>
          <Th>Erstellt von</Th>
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
            </Tr>
          )
        )}
      </Tbody>
    </Table>
  );
};
