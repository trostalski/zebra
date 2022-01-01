import { Field, Float, InputType, Int } from "type-graphql";
import { AnkleBrachialIndex } from "../../entities/AnkleBrachialIndex";
import { Patient } from "../../entities/Patient";
import { Task } from "../../entities/Task";
import { User } from "../../entities/User";
import { DrawBlood } from "../../entities/DrawBlood";
import { PatientTask } from "../../entities/PatientTask";
import { VenousCatheter } from "src/entities/VenousCatheter";
import { VitalSigns } from "src/entities/VitalSigns";

@InputType()
export class RegisterInput implements Partial<User> {
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
  @Field(() => Float)
  rightArm: number;

  @Field(() => Float)
  leftArm: number;

  @Field(() => Float)
  rightLeg: number;

  @Field(() => Float)
  leftLeg: number;

  @Field(() => Float)
  leftAbi?: number;

  @Field(() => Float)
  rightAbi?: number;

  @Field(() => Int)
  patientTaskId: number;
}

@InputType()
export class PatientTaskInput implements Partial<PatientTask> {
  @Field(() => String)
  timepoint: string;

  @Field(() => Boolean, { defaultValue: false })
  urgent: boolean;

  @Field(() => String, { nullable: true })
  comment?: string;

  /*
  @Field(() => Boolean)
  completed?: boolean;
  */

  @Field(() => String, { nullable: true })
  result?: string;
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

@InputType()
export class DrawBloodInput implements Partial<DrawBlood> {
  @Field()
  patientTaskId: number;

  @Field()
  FlaskType: string;
}

@InputType()
export class VenousCatheterInput implements Partial<VenousCatheter> {
  @Field()
  patientTaskId: number;

  @Field()
  location: string;

  @Field()
  catheterType: string;
}

@InputType()
export class VitalSignsInput implements Partial<VitalSigns> {
  @Field()
  patientTaskId: number;

  @Field({ defaultValue: false })
  bloodPressureRequired: boolean;

  @Field()
  bloodPressureResult: number;

  @Field({ defaultValue: false })
  pulseRequired: boolean;

  @Field()
  pulseResult: number;

  @Field({ defaultValue: false })
  temperatureRequired: boolean;

  @Field()
  temperatureResult: number;
}
