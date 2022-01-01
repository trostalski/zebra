import { AddIcon, EditIcon, TimeIcon, WarningIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Input,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useCreatePatientTaskMutation } from "../generated/graphql";

interface ClickableAnforderungsButtonProps {
  taskName: string;
  taskId: number;
  patientId: number;
}

export const ClickableAnforderungsButton: React.FC<ClickableAnforderungsButtonProps> =
  ({ taskName, taskId, patientId, children }) => {
    // controls popover
    const { onOpen, onClose, isOpen } = useDisclosure();
    const [value, onChange] = useState(new Date());

    // Anforderungs Zeitpunkt hinzugefügt
    const [timepoint, settimepoint] = useState(false);

    // Anforderungs Kommentar hinzugefügt
    const [comment, setcomment] = useState(false);

    // Anforderung als dringlich markiert
    const [urgent, seturgent] = useState(false);

    // Anforderung erstellen
    const [, createAnforderung] = useCreatePatientTaskMutation();

    return (
      <>
        <Popover
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          placement="right"
          closeOnBlur={false}
        >
          <PopoverTrigger>
            <Box
              as="button"
              bgColor="mainWhite"
              borderWidth={1}
              borderColor="gray.300"
              w={20}
              h={10}
              rounded="lg"
              shadow="md"
              _hover={{
                transition: "transform .2s",
                transform: "scale(1.05)",
              }}
              onClick={() => {
                onOpen();
              }}
            >
              <Text fontSize="16" fontWeight="hairline">
                {taskName}
              </Text>
            </Box>
          </PopoverTrigger>
          <PopoverContent p={5} fontSize="12" w={60}>
            <PopoverArrow />
            <Flex
              as="button"
              fontSize="12"
              align="center"
              _hover={{
                fontWeight: "bold",
              }}
              onClick={() => {
                createAnforderung({
                  taskId: taskId,
                  patientId: patientId,
                  input: {
                    timepoint: "heute",
                    urgent: urgent,
                  },
                });
                onClose();
              }}
            >
              <AddIcon />
              <Text ml={2}>Anfordern</Text>
            </Flex>

            {/* ab hier akkordion */}

            <Flex
              textAlign="left"
              as="button"
              align="center"
              color={!timepoint ? "gray" : "#000000"}
              fontWeight={!timepoint ? "normal" : "bold"}
              _hover={{
                fontWeight: "bold",
              }}
              onClick={() => settimepoint(!timepoint)}
            >
              <TimeIcon />
              <Text ml={2}>Zeitpunkt hinzufügen</Text>
            </Flex>
            <Flex
              textAlign="left"
              as="button"
              align="center"
              color={!comment ? "gray" : "#000000"}
              fontWeight={!comment ? "normal" : "bold"}
              _hover={{
                fontWeight: "bold",
              }}
              onClick={() => setcomment(!comment)}
            >
              <EditIcon />
              <Text ml={2}>Kommentar hinzufügen</Text>
            </Flex>
            <Flex
              as="button"
              align="center"
              color={!urgent ? "gray" : "red"}
              fontWeight={!urgent ? "normal" : "bold"}
              _hover={{
                fontWeight: "bold",
              }}
              onClick={() => seturgent(!urgent)}
            >
              <WarningIcon />
              <Text ml={2}>als dringlich markieren</Text>
            </Flex>
            {!timepoint ? null : (
              <Input mt={2} fontSize="12" placeholder="Zeitpunkt"></Input>
            )}
            {!comment ? null : (
              <Input mt={2} fontSize="12" placeholder="Kommentar"></Input>
            )}
            <PopoverCloseButton />
          </PopoverContent>
        </Popover>
      </>
    );
  };
