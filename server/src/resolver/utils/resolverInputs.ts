import { User } from "../../entities/User";
import { Field, InputType, Int } from "type-graphql";
import { Patient } from "src/entities/Patient";
import { AnkleBrachialIndex } from "src/entities/AnkleBrachialIndex";
import { Task } from "src/entities/Task";

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
