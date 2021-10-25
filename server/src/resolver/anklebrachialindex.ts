import { MyContext } from "src/types";
import {
  Arg,
  Ctx,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from "type-graphql";
import { AnkleBrachialIndex } from "../entities/AnkleBrachialIndex";
import { Patient } from "../entities/Patient";
import { PatientTask } from "../entities/PatientTask";
import { Task } from "../entities/Task";
import { User } from "../entities/User";
import { AnkleBrachialIndexInput } from "./utils/resolverInputs";

@Resolver(AnkleBrachialIndex)
export class AnkleBrachialIndexResolver {
  @FieldResolver(() => User)
  creatorUser(@Root() task: PatientTask) {
    return User.findOne(task.creatorId);
  }

  @FieldResolver(() => Patient)
  forPatient(@Root() task: PatientTask) {
    return Patient.findOne(task.patientId);
  }

  @Query(() => [AnkleBrachialIndex])
  async listAnkleBrachialIndex(): Promise<AnkleBrachialIndex[]> {
    return await AnkleBrachialIndex.find({});
  }

  @Query(() => Task)
  async ankleBrachialIndexParentTask() {
    return Task.findOne({ where: { name: "Ankle Brachial Index" } });
  }

  @Mutation(() => Boolean)
  async deleteAnkleBrachialIndex(@Arg("input") inputId: number) {
    try {
      await AnkleBrachialIndex.delete(inputId);
      return true;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  @Mutation(() => AnkleBrachialIndex)
  async createAnkleBrachialIndex(
    @Arg("AbiInput") abiInput: AnkleBrachialIndexInput,
    @Ctx() {}: MyContext
  ): Promise<AnkleBrachialIndex> {
    const patientTask = await PatientTask.findOne(abiInput.patientTaskId);
    const result = await AnkleBrachialIndex.create({
      ...abiInput,
      patientTask: patientTask,
    }).save();
    return result;
  }
}
