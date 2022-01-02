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
export class NumPatientTasks {
  @Field(() => Int, { nullable: true })
  forPatientId?: number;

  @Field({ nullable: true })
  count?: number;
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

  // Preview number and urgency of patientTasks in the station list
  @Query(() => [NumPatientTasks])
  async numPatientTasks(): Promise<NumPatientTasks[]> {
    const result = await getConnection().query(
      ` SELECT patient_task."forPatientId", count(*)
        FROM patient_task
        GROUP BY patient_task."forPatientId"`
    );
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
