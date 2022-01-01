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
  Text
} from "@chakra-ui/react";
import React from "react";
import {
  useGetPatientByIdQuery
} from "../generated/graphql";
import { ErgebnisseBox } from "./ErgebnisseBox";
import { PatientAnfordernBox } from "./PatientAnfordernBox";
import { PatientAnforderungenBox } from "./PatientAnforderungenBox";

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
        <DrawerHeader fontSize="28" flexDir="row">
          {patient?.getPatientById.firstname} {patient?.getPatientById.lastname}
        </DrawerHeader>
        <DrawerBody fontSize="14">
          <Flex flexDir="row">
            <Flex flexDir="column">
              <Text>
                <b> Alter </b>
                <br /> {patient?.getPatientById.age}
              </Text>
              <Text>
                <b> Diagnose </b>
                <br /> {patient?.getPatientById.diagnosis}
              </Text>
              <Text>
                <b> Stationär seit </b>
                <br /> {patient?.getPatientById.updatedAt}
              </Text>
              <Text>
                <b> Voraussichtliche Entlassung </b>
                <br /> {patient?.getPatientById.createdAt}
              </Text>
              <ErgebnisseBox></ErgebnisseBox>
            </Flex>
            <Flex flexDir="column" ml="auto">
              <PatientAnfordernBox patientId={patientId} />
              <PatientAnforderungenBox patientId={patientId} />
            </Flex>
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
