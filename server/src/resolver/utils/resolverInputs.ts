import { Field, Float, InputType, Int } from "type-graphql";
import { AnkleBrachialIndex } from "../../entities/AnkleBrachialIndex";
import { Patient } from "../../entities/Patient";
import { Task } from "../../entities/Task";
import { User } from "../../entities/User";

@InputType()
export class RegisterInput implements Partial<User> {
  @Field(() => String)
  username: string;

  @Field(() => String)
  firstname: string;

  @Field(() => String)
  lastname: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;

  @Field(() => String)
  department: string;

  @Field(() => String)
  position: string;
}

@InputType()
export class AnkleBrachialIndexInput implements Partial<AnkleBrachialIndex> {
  @Field(() => Int)
  rightArm: number;

  @Field(() => Int)
  leftArm: number;

  @Field(() => Int)
  rightLeg: number;

  @Field(() => Int)
  leftLeg: number;

  @Field(() => Float!)
  leftAbi?: number;

  @Field(() => Float!)
  rightAbi?: number;

  @Field(() => Int)
  patientTaskId: number;
}

@InputType()
export class PatientInput implements Partial<Patient> {
  @Field(() => String)
  firstname: string;

  @Field(() => String)
  lastname: string;

  @Field(() => String)
  age: number;

  @Field(() => String)
  diagnosis: string;

  @Field(() => Int)
  room: number;
}

@InputType()
export class TaskInput implements Partial<Task> {
  @Field(() => String)
  name: string;

  @Field(() => String)
  explanation: string;
}
