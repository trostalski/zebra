import { Patient } from "../entities/Patient";
import {
  Arg,
  Field,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";
import { PatientInput } from "./utils";

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
  @Query(() => [Patient], { nullable: true })
  async listPatients() {
    return await Patient.find({});
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
