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
  Select,
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
    | Patient 
    | undefined;
};

export const PatientModal: React.FC<PatientModalProps> = (props) => {
  console.log("Error detection:   ")
  const { isOpen, onClose } = useDisclosure(props);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {console.log(props.patient)}
      <ModalOverlay bg="" backdropFilter="auto" />
      <ModalContent>
        <ModalHeader>
          {props.patient!.firstname} {props.patient!.lastname}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>Alter: {props.patient!.age}</ModalBody>
        <ModalBody>Diagnose: {props.patient!.diagnosis}</ModalBody>
        <ModalBody>Ausstehende Untersuchungen:</ModalBody>
        <ModalFooter>
          <Select placeholder="Untersuchung anfordern" mr={4}>
            <option value="ABI">ABI</option>
            <option value="Blutdruck">Blutdruck messen</option>
            <option value="Blut abnehmen">Blut abnehmen</option>
          </Select>
          <Button colorScheme="green" onClick={onClose}>
            Bestätigen
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
