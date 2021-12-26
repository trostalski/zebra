import { VitalSigns } from "../entities/VitalSigns";
import {
  Arg, Mutation,
  Query,
  Resolver
} from "type-graphql";
import { PatientTask } from "../entities/PatientTask";
import { Task } from "../entities/Task";
import { VitalSignsInput } from "./utils/resolverInputs";

@Resolver(VitalSigns)
export class VitalSignsResolver{

  @Query(() => [VitalSigns])
  async listVitalSigns(): Promise<VitalSigns[]> {
    return await VitalSigns.find({});
  }

  @Query(() => Task)
  async VitalSignsParentTask() {
    return await Task.findOne({ where: { name: "Vitalzeichen" } });
  }

  @Mutation(() => Boolean)
  async deleteVitalSigns(@Arg("input") inputId: number) {
    try {
      await VitalSigns.delete(inputId);
      return true;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  @Mutation(() => VitalSigns)
  async createVitalSigns(
    @Arg("input") input: VitalSignsInput,
  ): Promise<VitalSigns> {
    const patientTask = await PatientTask.findOne(input.patientTaskId);
    const result = await VitalSigns.create({
      ...input,
      patientTask: patientTask,
    }).save();
    return result;
  }
}