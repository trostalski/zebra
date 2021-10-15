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
} from "@chakra-ui/react";
import React from "react";
import { Patient } from "../generated/graphql";

type PatientModalProps = {
  isOpen: boolean;
  onOpen?: () => void;
  onClose: () => void;
  onToggle?: () => void;
  isControlled?: boolean;
  getButtonProps?: (props?: any) => any;
  getDisclosureProps?: (props?: any) => any;
  patient:
    | {
        __typename?: "Patient" | undefined;
        id: number;
        firstname: string;
        lastname: string;
        room: number;
        age: number;
        diagnosis: string;
      }
    | undefined;
};

export const PatientModal: React.FC<PatientModalProps> = (props) => {
  const { isOpen, onClose } = useDisclosure(props);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {console.log(props.patient)}
      <ModalOverlay bg="" backdropFilter="auto"/>
      <ModalContent>
        <ModalHeader>{props.patient!.firstname} {props.patient!.lastname}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>Alter: {props.patient!.age}</ModalBody>
        <ModalBody>Diagnose: {props.patient!.diagnosis}</ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">Untersuchung anfordern</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
