import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Flex,
  Input,
  Text,
  InputGroup,
  InputRightElement,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import { useListTaskNamesQuery } from "../generated/graphql";
import { ClickableAnforderungsButton } from "./ClickableAnforderungsButton";

type PatientAnfordernBoxProps = {
  patientId: number;
};

export const PatientAnfordernBox: React.FC<PatientAnfordernBoxProps> = ({
  patientId,
  children,
}) => {
  const [{ data, fetching }] = useListTaskNamesQuery();
  return (
    <Box
      w="30vw"
      h="25vh"
      bgColor="white"
      overflowY="auto" // enables scrolling for y-overflow
      rounded="3xl"
      color="#000000"
    >
      <Center mt={2}>
        Untersuchung anfordern
        <InputGroup
          w="10vw"
          rounded="3xl"
          ml={4}
          size="sm"
          shadow="md"
          bgColor="white"
        >
          <Input rounded="3xl" placeholder="Suchen"></Input>
          <InputRightElement
            rounded="3xl"
            children={<SearchIcon boxSize={4} color="gray.500" />}
          ></InputRightElement>
        </InputGroup>
      </Center>
      <Center>
        <SimpleGrid columns={4} spacing={2} p={2}>
          {data?.listTasks?.map((d) =>
            !d ? (
              <Text>Keine Daten</Text>
            ) : (
              <Flex key={d.id}>
                <ClickableAnforderungsButton
                  taskName={d.name}
                  taskId={d.id}
                  patientId={patientId}
                />
              </Flex>
            )
          )}
        </SimpleGrid>
      </Center>
    </Box>
  );
};
