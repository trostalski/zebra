import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useGetPatientByIdQuery } from "../generated/graphql";
import { AnforderungenBox } from "./AnforderungenBox";
import { ErgebnisseBox } from "./UntersuchungenBox";

interface PatienDrawerProps {
  patientId: number;
  show: boolean;
  handleClose: () => void;
}

export const PatientDrawer: React.FC<PatienDrawerProps> = ({
  handleClose,
  patientId,
  show,
  children,
}) => {
  // fetch patient by patientId parameter
  const [{ data: patient }] = useGetPatientByIdQuery({
    variables: {
      input: patientId,
    },
  });
  return (
    <Drawer isOpen={show} onClose={handleClose} size="xl" placement="right">
      <DrawerOverlay />
      <DrawerContent mt="20" rounded="xl" bgColor="mainGreen" color="white">
        {children}
        <DrawerCloseButton />
        <DrawerHeader fontSize="38">
          {patient?.getPatientById.firstname} {patient?.getPatientById.lastname}
        </DrawerHeader>

        <DrawerBody fontSize="20">
          <Text p={2}>
            <b> Alter: </b> {patient?.getPatientById.age}
          </Text>
          <Text p={2}>
            <b> Diagnose(n): </b> {patient?.getPatientById.diagnosis}
          </Text>
          <Text p={2}>
            <b> Stationär seit: </b>{" "}
          </Text>
          <Text p={2}>
            <b> Voraussichtliche Entlassung: </b>
          </Text>
          <Flex>
            <AnforderungenBox patientId={patientId} />
          </Flex>
          <Flex mt={2}>
            <ErgebnisseBox patientId={patientId} />
          </Flex>
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={handleClose}>
            Cancel
          </Button>
          <Button colorScheme="blue">Save</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
