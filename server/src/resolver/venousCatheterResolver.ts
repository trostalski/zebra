import { VenousCatheter } from "../entities/VenousCatheter";
import {
  Arg, Mutation,
  Query,
  Resolver
} from "type-graphql";
import { PatientTask } from "../entities/PatientTask";
import { Task } from "../entities/Task";
import { VenousCatheterInput } from "./utils/resolverInputs";

@Resolver(VenousCatheter)
export class VenousCatheterResolver{

  @Query(() => [VenousCatheter])
  async listAnkleBrachialIndex(): Promise<VenousCatheter[]> {
    return await VenousCatheter.find({});
  }

  @Query(() => Task)
  async VenousCatheterParentTask() {
    return await Task.findOne({ where: { name: "Intravenöser Zugang" } });
  }

  @Mutation(() => Boolean)
  async deleteVenousCatheter(@Arg("input") inputId: number) {
    try {
      await VenousCatheter.delete(inputId);
      return true;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  @Mutation(() => VenousCatheter)
  async createVenousCatheter(
    @Arg("input") input: VenousCatheterInput,
  ): Promise<VenousCatheter> {
    const patientTask = await PatientTask.findOne(input.patientTaskId);
    const result = await VenousCatheter.create({
      ...input,
      patientTask: patientTask,
    }).save();
    return result;
  }
}