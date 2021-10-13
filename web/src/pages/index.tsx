import { Box, Button, Flex, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import { NavBar } from "../components/NavBar";
import { PatientButton } from "../components/PatientButton";
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
    <Flex>
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
            <PatientButton />
          </Flex>
        )}
      </Flex> 
    </Flex>
  );
};

export default Index;
