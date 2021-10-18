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
import React from "react";
import {
  useAnkleBrachialIndexParentTaskQuery,
  useListAnkleBrachialIndexQuery,
} from "../generated/graphql";
import { TaskModal } from "./TaskModal";

interface TaskTableProps {}

export const TaskTable: React.FC<TaskTableProps> = ({}) => {
  const [{ data, fetching }] = useListAnkleBrachialIndexQuery();
  const [{data: dataAnkleBrachialIndexParent, fetching: fetchingAnkleBrachialIndexParent}] = useAnkleBrachialIndexParentTaskQuery();
  const { isOpen, onOpen, onClose } = useDisclosure();
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
        {data?.listAnkleBrachialIndex.map((d) =>
          !d ? null : (
            <Tr key={d.id}>
              <Td>
                <Button
                  onClick={() => {
                    onOpen();
                  }}
                >
                  {d.forPatient.firstname + " " + d.forPatient.lastname}
                </Button>
                <TaskModal task={d} isOpen={isOpen} onClose={onClose} />{" "}
              </Td>
              <Td>
                <Button
                  onClick={() => {
                    onOpen();
                  }}
                >
                  {d.forPatient.firstname + " " + d.forPatient.lastname}
                </Button>
                <AnkleBrachialIndexModal
                  patient={d.forPatient}
                  isOpen={isOpen}
                  onClose={onClose}
                />{" "}
              </Td>
              <Td> {d.creator.username}</Td>
            </Tr>
          )
        )}
      </Tbody>
    </Table>
  );
};
