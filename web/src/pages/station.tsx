import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { HeaderBar } from "../components/NewHeaderBar";
import { StationPatientBox } from "../components/StationPatientBox";
import { useRouter } from "next/router";

interface stationProps {}

const station: React.FC<stationProps> = ({}) => {
  return (
    <>
      <HeaderBar user="Meissenbacher" />
      <Flex justify="center" bgColor="mainWhite" height="100%">
        <Flex mt="24">
          <StationPatientBox />
        </Flex>
      </Flex>
    </>
  );
};

export default station;
