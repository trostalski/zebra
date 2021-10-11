import {
  Flex,
  Text,
  Stack,
  Box,
  Heading,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import { NavBar } from "../components/NavBar";
import {
  useListPatientsQuery,
  usePatientRoomsQuery,
} from "../generated/graphql";

const Index = () => {
  const [{ data: roomsData, fetching: roomFetching }] = usePatientRoomsQuery();
  const [{ data: patientsData, fetching: patientFetching }] =
    useListPatientsQuery();

  if ((!patientsData && !patientFetching) || (!roomsData && !roomFetching)) {
    return <div>not loading</div>;
  }

  const loading: boolean =
    (!patientsData && patientFetching) || (!roomsData && roomFetching);

  return (
    <Flex h="100%" maxW="2000px" flexDir="row" overflow="scroll" bg="gray.50">
      {/* first left column */}
      <NavBar />
      {/* second column */}
      {loading ? (
        <div>loading...</div>
      ) : (
        <Flex
          left="20%"
          position="absolute"
          flexDirection="column"
          padding={4}
          alignContent="center"
        >
          {/* sort patients by their room and display*/}
          <SimpleGrid columns={2} spacing={8}>
              {roomsData!.patientRooms.map((r) =>
                !r ? null : (
                  <Box
                    rounded="lg"
                    bg="white"
                    p={4}
                    w={"30vw"}
                    borderWidth={1}
                    shadow={"md"}
                  >
                    <Heading fontSize="xl" mb={4}>
                      Zimmer: {r}
                    </Heading>
                    {patientsData!.listPatients.map((p) =>
                      !p ? null : p.room == r ? (
                        <Flex
                          alignContent="center"
                          flexDirection="column"
                          p={2}
                        >
                          <Button>
                            <Text mr="auto">
                              {p.firstname + " " + p.lastname}{" "}
                            </Text>
                            <Text mr="left">Alter: {p.age} </Text>
                          </Button>
                        </Flex>
                      ) : null
                    )}
                  </Box>
                )
              )}
          </SimpleGrid>
        </Flex>
      )}
    </Flex>
  );
};

export default Index;
