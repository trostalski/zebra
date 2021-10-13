import { Patient } from "../entities/Patient";
import {
  Arg,
  Field,
  Int,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";
import { PatientInput } from "./utils";
import {  getConnection } from "typeorm";

@ObjectType()
export class PatientOutput {
  @Field(() => String, { nullable: true })
  message?: string;

  @Field(() => Patient, { nullable: true })
  patient?: Patient;
}

// list all users in DB
@Resolver(Patient)
export class PatientResolver {
  @Query(() => [Patient])
  async listPatients(): Promise<Patient[]> {
    return await Patient.find({});
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

  //Registration
  @Mutation(() => PatientOutput)
  async createPatient(
    @Arg("Patientdata") input: PatientInput
  ): Promise<PatientOutput> {
    const patient = await Patient.create(input).save();
    return { patient };
  }

  @Mutation(() => PatientOutput)
  async deletePatient(@Arg("taskId") id: number): Promise<PatientOutput> {
    Patient.delete(id);
    return { message: "Patient deleted" };
  }
}
