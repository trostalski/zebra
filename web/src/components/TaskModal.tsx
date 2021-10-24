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
  propNames,
} from "@chakra-ui/react";
import React from "react";
import { Task } from "../generated/graphql";

type TaskModalProps = {
  isOpen: boolean;
  onOpen?: () => void;
  onClose: () => void;
  onToggle?: () => void;
  isControlled?: boolean;
  getButtonProps?: (props?: any) => any;
  getDisclosureProps?: (props?: any) => any;
  task: Task;
};

export const TaskModal: React.FC<TaskModalProps> = (props) => {
  const { isOpen, onClose } = useDisclosure(props);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay bg="" backdropFilter="auto" />
      <ModalContent>
        <ModalHeader>{props.task.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <b> Erklärung:</b>
          {props.task.explanation}
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="green" onClick={onClose}>
            Bestätigen
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
