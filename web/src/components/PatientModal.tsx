import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Text,
  Select,
  Divider,
  PortalManager,
  Flex,
} from "@chakra-ui/react";
import React, { FormEventHandler, useState } from "react";
import { UseQueryArgs } from "urql";
import {
  Exact,
  Patient,
  useCreatePatientTaskMutation,
  useSpecificPatientTasksQuery,
} from "../generated/graphql";

type PatientModalProps = {
  isOpen: boolean;
  onOpen?: () => void;
  onClose: () => void;
  onToggle?: () => void;
  isControlled?: boolean;
  getButtonProps?: (props?: any) => any;
  getDisclosureProps?: (props?: any) => any;
  patient: Patient | undefined;
};

export const PatientModal: React.FC<PatientModalProps> = (props) => {
  const [{ data: specificTasksData, fetching: specificTasksFetching }] =
    useSpecificPatientTasksQuery({ variables: { input: props.patient?.id! } });

  const [, createPatientTask] = useCreatePatientTaskMutation();
  const { isOpen, onClose } = useDisclosure(props);

  const [selectedTask, setSelectedTask] = useState("0");

  const handleChange = (event: any) => {
    console.log("selectedTask: ", selectedTask, "\n", "type: ");
    setSelectedTask(event.target.value);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {console.log("specific Tasks Object: ", specificTasksData)}
      <ModalOverlay bg="" backdropFilter="auto" />
      <ModalContent>
        <ModalHeader>
          {props.patient!.firstname} {props.patient!.lastname}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>Alter: {props.patient!.age}</ModalBody>
        <ModalBody>Diagnose: {props.patient!.diagnosis}</ModalBody>
        <ModalBody>
          Ausstehende Untersuchungen:
          {specificTasksData?.specificPatientTasks?.map((d) =>
            !d ? null : (
              <Flex flexDir="row">
                <Divider />
                <Flex flexDir="column" alignItems="flex-start">
                  <Text key={d.id}>{d.createdAt}</Text>
                </Flex>
                <Flex>
                  <Text>{d.parentTask.name}</Text>
                </Flex>
              </Flex>
            )
          )}
        </ModalBody>
        <ModalFooter>
          <Select
            onChange={handleChange}
            placeholder="Untersuchung anfordern"
            mr={4}
          >
            <option value="1">ABI</option>
          </Select>
          <Button
            colorScheme="green"
            onClick={() => {
              createPatientTask({
                taskId: parseFloat(selectedTask),
                patientId: props.patient?.id!,
              });
              onClose;
            }}
          >
            Bestätigen
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
