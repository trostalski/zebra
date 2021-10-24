import {
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberInput,
  NumberInputField,
  Select,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  PatientTask,
  useCreateAnkleBrachialIndexMutation,
} from "../generated/graphql";

type AnkleBrachialIndexModalProps = {
  isOpen: boolean;
  onOpen?: () => void;
  onClose: () => void;
  onToggle?: () => void;
  isControlled?: boolean;
  getButtonProps?: (props?: any) => any;
  getDisclosureProps?: (props?: any) => any;
  patientTask: PatientTask;
};

export const AnkleBrachialIndexModal: React.FC<AnkleBrachialIndexModalProps> = (
  props
) => {
  const [, createAnkleBrachialIndex] = useCreateAnkleBrachialIndexMutation();

  const { isOpen, onClose } = useDisclosure(props);

  const [leftArm, setleftArm] = useState<number>(0);
  const [leftLeg, setleftLeg] = useState<number>(0);

  const [rightArm, setrightArm] = useState<number>(0);
  const [rightLeg, setrightLeg] = useState<number>(0);

  const [leftAbi, setleftAbi] = useState<number>(0);
  const [rightAbi, setrightAbi] = useState<number>(0);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay bg="" backdropFilter="auto" />
      <ModalContent>
        <ModalHeader>Ankle Brachial Index (ABI)</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex flexDir="row">
            <Flex mr="auto" flexDir="column" alignItems="center" w={180}>
              <NumberInput>
                {"linker Arm"}
                <NumberInputField
                  onChange={(e) => {
                    setleftArm(parseInt(e.target.value));
                    setleftAbi(
                      Math.round((leftLeg / parseInt(e.target.value)) * 10) / 10
                    );
                  }}
                ></NumberInputField>
              </NumberInput>
              <NumberInput>
                {"linkes Bein"}
                <NumberInputField
                  onChange={(e) => {
                    setleftLeg(parseInt(e.target.value));
                    setleftAbi(
                      Math.round((parseInt(e.target.value) / leftArm) * 10) / 10
                    );
                  }}
                ></NumberInputField>
              </NumberInput>
              <Stat mt={4}>
                <StatLabel>linker ABI</StatLabel>
                <StatNumber>{isNaN(leftAbi) ? 0 : leftAbi}</StatNumber>
              </Stat>
            </Flex>
            <Flex flexDir="column" alignItems="center" w={180}>
              <NumberInput>
                {"rechter Arm"}
                <NumberInputField
                  onChange={(e) => {
                    setrightArm(parseInt(e.target.value));
                    setrightAbi(
                      Math.round((rightLeg / parseInt(e.target.value)) * 10) /
                        10
                    );
                  }}
                ></NumberInputField>
              </NumberInput>
              <NumberInput>
                {"rechtes Bein"}
                <NumberInputField
                  onChange={(e) => {
                    setrightLeg(parseInt(e.target.value));
                    setrightAbi(
                      Math.round((parseInt(e.target.value) / rightArm) * 10) /
                        10
                    );
                  }}
                ></NumberInputField>
              </NumberInput>
              <Stat mt={4}>
                <StatLabel>rechter ABI</StatLabel>
                <StatNumber>{isNaN(rightAbi) ? 0 : rightAbi}</StatNumber>
              </Stat>
            </Flex>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="green"
            onClick={() => {
              console.log(
                "typeof: results",
                typeof leftAbi,
                " ",
                typeof rightAbi
              );
              createAnkleBrachialIndex(
                {
                  abiInput: {
                    leftArm: leftArm,
                    leftLeg: leftLeg,
                    rightArm: rightArm,
                    rightLeg: rightLeg,
                    leftAbi: leftAbi,
                    rightAbi: rightAbi,
                    patientTaskId: props.patientTask.id,
                  },
                },
                onClose
              );
            }}
          >
            Bestätigen
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
