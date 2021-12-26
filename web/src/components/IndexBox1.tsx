import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Img } from "@chakra-ui/react";

const IndexBox1 = ({}) => {
  const [time, settime] = useState(new Date());

  useEffect(() => {
    setInterval(() => settime(new Date()), 30000);
    return () => {
      settime(new Date()); // This worked for me
    };
  }, []);

  return (
    <Flex
      flexDir="row"
      justifyContent="space-between"
      bgColor="white"
      w="90vw"
      h="25vh"
      rounded="3xl"
    >
      <Text fontSize={20} fontFamily="roboto" p={8}>
        Gefäßchirurgie F1
      </Text>
      <Text fontSize={120} alignSelf="center">
        {time
          .toLocaleDateString("de-DE", {
            hour: "numeric",
            minute: "numeric",
            hour12: false,
          })
          .slice(12)}
      </Text>
      <Box alignSelf="center" size="sm" m={8}>
        <Img
          boxSize="180px"
          src={"/171029Logo_UKHD_dt_positiv_CMYK Kopie.png"}
        />
      </Box>
    </Flex>
  );
};

export default IndexBox1;
