import {
  Arg,
  Field,
  Int,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";
import { getConnection } from "typeorm";
import { Patient } from "../entities/Patient";
import { PatientInput } from "./utils/resolverInputs";

@ObjectType()
export class PatientRoomOutput {
  @Field(() => Int)
  room: number;
}

// list all patients in DB
@Resolver(Patient)
export class PatientResolver {
  @Query(() => [Patient])
  async listPatients(): Promise<Patient[]> {
    const result = await getConnection().query(
      `SELECT *
      FROM "patient"`
    );
    return result;
  }

  @Query(() => Patient)
  async getPatientById(@Arg("input") input: number): Promise<Patient> {
    const result = await Patient.findOne(input);
    // need to handle error when id does not exist
    return result!;
  }

  @Query(() => [Int])
  async patientRooms(): Promise<number[]> {
    const result: number[] = [];
    const rooms = await getConnection().query(
      `SELECT room
      FROM "patient"
      GROUP by room 
      ORDER by room ASC;`
    );
    rooms.forEach((room: { [x: string]: number }) => {
      result.push(room["room"]);
    });
    return result;
  }

  // create Patient
  @Mutation(() => Patient)
  async createPatient(
    @Arg("Patientdata") input: PatientInput
  ): Promise<Patient> {
    const patient = await Patient.create(input).save();
    return patient;
  }

  // delete Patient
  @Mutation(() => String)
  async deletePatient(@Arg("taskId") id: number): Promise<String> {
    Patient.delete(id);
    return "Patient deleted";
  }
}
