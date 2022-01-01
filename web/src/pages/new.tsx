import React from "react";
import { Flex, Icon } from "@chakra-ui/react";
import { HeaderBar } from "../components/NewHeaderBar";
import IndexBox1 from "../components/IndexBox1";
import IndexButton1 from "../components/IndexButton1";
import {
  BiHomeAlt,
  BiStats,
  BiBellPlus,
  BiNotepad,
  BiNote,
} from "react-icons/bi";

interface NewProps {}

const New: React.FC<NewProps> = ({}) => {
  const stationsIcon = <Icon boxSize={14} as={BiHomeAlt} />;
  const anfordernIcon = <Icon boxSize={14} as={BiBellPlus} />;
  const ergebnisseIcon = <Icon boxSize={14} as={BiStats} />;
  const uebersichtIcon = <Icon boxSize={14} as={BiNotepad} />;

  return (
    <>
      <HeaderBar workspace="index" user="Meissenbacher" />
      <Flex flexDir="column" bg="mainGreen" height="100vh">
        <Flex justify="center" mt="24">
          <IndexBox1 />
        </Flex>
        <Flex justify="space-between" mt={6}>
          <IndexButton1
            left={true}
            description="Station"
            icon={stationsIcon}
            link="/station"
          />
          <IndexButton1
            description="Anforderungen"
            icon={anfordernIcon}
            link="/anforderungen"
          />
          <IndexButton1
            description="Ergebnisse"
            icon={ergebnisseIcon}
            link="/station"
          />
          <IndexButton1
            right={true}
            description="Übersicht"
            icon={uebersichtIcon}
            link="/station"
          />
        </Flex>
      </Flex>
    </>
  );
};

export default New;
