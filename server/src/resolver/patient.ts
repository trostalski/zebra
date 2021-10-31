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
export class PatientOutput {
  @Field(() => String, { nullable: true })
  message?: string;

  @Field(() => Patient, { nullable: true })
  patient?: Patient;
}

@ObjectType()
export class PatientRoomOutput {
  @Field(() => Int)
  room: number;
}

// list all users in DB
@Resolver(Patient)
export class PatientResolver {
  @Query(() => [Patient])
  async listPatients(): Promise<Patient[]> {
    const res: Patient[] = await getConnection().query(
      `SELECT * FROM "patient"`
    );
    console.log(res);
    return res;
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

  // @Query(() => Boolean)
  // async patientsByRoom(): Promise<boolean> {
  //   const temp: Patient[] = await getConnection().query(
  //     `
  //      select * from patient order by room
  //     `
  //   );

  //   const res: any  = groupBy(temp, "room");
  //   console.log(typeof res);

  //   return true;
  // }

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
