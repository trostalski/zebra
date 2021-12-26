import { DrawBlood } from "../entities/DrawBlood";
import {
  Arg, Mutation,
  Query,
  Resolver
} from "type-graphql";
import { PatientTask } from "../entities/PatientTask";
import { Task } from "../entities/Task";
import { DrawBloodInput } from "./utils/resolverInputs";

@Resolver(DrawBlood)
export class DrawBloodResolver{

  @Query(() => [DrawBlood])
  async listDrawBlood(): Promise<DrawBlood[]> {
    return await DrawBlood.find({});
  }

  @Query(() => Task)
  async DrawBloodParentTask() {
    return await Task.findOne({ where: { name: "Blutentnahme" } });
  }

  @Mutation(() => Boolean)
  async deleteDrawBlood(@Arg("input") inputId: number) {
    try {
      await DrawBlood.delete(inputId);
      return true;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  @Mutation(() => DrawBlood)
  async createDrawBlood(
    @Arg("input") input: DrawBloodInput,
  ): Promise<DrawBlood> {
    const patientTask = await PatientTask.findOne(input.patientTaskId);
    const result = await DrawBlood.create({
      ...input,
      patientTask: patientTask,
    }).save();
    return result;
  }
}