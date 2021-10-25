import {
  Button,
  Divider,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import dateFormat, { DateFormatMasks } from "dateformat";
import React, { useState } from "react";
import {
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
      <ModalOverlay bg="" backdropFilter="auto" />
      <ModalContent>
        <ModalHeader>
          {props.patient?.firstname} {props.patient?.lastname}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>Alter: {props.patient?.age}</ModalBody>
        <ModalBody>Diagnose: {props.patient?.diagnosis}</ModalBody>
        <ModalBody overflow="scroll">
          Ausstehende Untersuchungen:
          {specificTasksData?.specificPatientTasks?.map((d) =>
            !d ? null : (
              <>
                <Divider orientation="horizontal" />
                <Flex flexDir="row" mt={4}>
                  <Flex flexDir="column" mr="auto">
                    <Text key={d.id}>
                      <Text>{d.parentTask.name}</Text>
                    </Text>
                  </Flex>
                  <Flex flexDir="column" ml="auto">
                    {dateFormat(d.createdAt, "dd.mm h:MM")}
                  </Flex>
                </Flex>
              </>
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
