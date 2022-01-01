import { Flex } from "@chakra-ui/layout";
import { Box, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import React from "react";
import { HeaderBar } from "../components/NewHeaderBar";
import {
  useListPatientTasksQuery,
  usePatientRoomsQuery,
} from "../generated/graphql";

interface AnforderungenListProps {}

const AnforderungenList: React.FC<AnforderungenListProps> = ({}) => {
  // get patients room
  const [{ data: patientRooms }] = usePatientRoomsQuery();

  const [{ data: patientTassk }] = useListPatientTasksQuery();

  return (
    <Flex flexDir="column">
      <SimpleGrid columns={1} spacingY={2}>
        {patientRooms?.patientRooms?.map((r) =>
          !r ? null : (
            <Box
              key={r}
              rounded="3xl"
              bg="white"
              p={4}
              w={"80vw"}
              shadow={"lg"}
            >
              <Heading ml={4} fontSize="l" mb={4}>
                Zimmer: {r}
              </Heading>
            </Box>
          )
        )}
      </SimpleGrid>
    </Flex>
  );
};

export default AnforderungenList;
