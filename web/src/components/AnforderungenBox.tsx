import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import { useListTaskNamesQuery } from "../generated/graphql";
import { ClickableAnforderungsButton } from "./ClickableAnforderungsButton";

type AnforderungenBoxProps = {
  patientId: number;
};

export const AnforderungenBox: React.FC<AnforderungenBoxProps> = ({
  patientId,
  children,
}) => {
  const [{ data, fetching }] = useListTaskNamesQuery();
  return (
    <Box
      w="60vw"
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
          size="md"
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
        <SimpleGrid columns={4} spacing={6} p={4}>
          {data?.listTasks?.map((d) =>
            !d ? (
              <Center>{console.log("no data!")}no data</Center>
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
