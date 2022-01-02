import { Flex } from "@chakra-ui/layout";
import React from "react";
import AnforderungenList from "../components/AnforderungenList";
import { HeaderBar } from "../components/NewHeaderBar";

interface AnforderungenProps {}

const Anforderungen: React.FC<AnforderungenProps> = ({}) => {
  return (
    <>
      <HeaderBar user="Meissenbacher" />
      <Flex bg="mainWhite" h="100%" justify="center">
        <Flex height="100%" bg="mainWhite">
          <Flex mt="24">
            <AnforderungenList></AnforderungenList>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Anforderungen;
