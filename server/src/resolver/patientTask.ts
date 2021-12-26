import { Patient } from "../entities/Patient";
import { Task } from "../entities/Task";
import { User } from "../entities/User";
import { MyContext } from "src/types";
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { PatientTask } from "../entities/PatientTask";
import { PatientTaskInput } from "./utils/resolverInputs";

@Resolver(PatientTask)
export class PatientTaskResolver {
  //list all tasks
  @Query(() => [PatientTask], { nullable: true })
  async listPatientTasks() {
    const result = await PatientTask.find({
      relations: ["creatorUser", "forPatient", "parentTask"],
    });
    return result;
  }

  // get Tasks for specific patient
  @Query(() => [PatientTask], { nullable: true })
  async patientAnforderungen(
    @Arg("input") input: number
  ): Promise<PatientTask[]> {
    console.log(input);
    console.log("Hey gusys  ")
    const result = await PatientTask.find({
      where: { forPatient: input, completed: false },
      relations: ["creatorUser", "forPatient", "parentTask"],
    });
    return result;
  }

  async patientErgebnisse(@Arg("input") input: number): Promise<PatientTask[]> {
    const result = await PatientTask.find({
      where: { forPatient: input, completed: true },
      relations: ["creatorUser", "forPatient", "parentTask"],
    });
    return result;
  }

  @Mutation(() => PatientTask)
  async createPatientTask(
    @Arg("input") input: PatientTaskInput,
    @Arg("patientId") patientId: number,
    @Arg("taskId") taskId: number,
    @Ctx() { req }: MyContext
  ): Promise<PatientTask> {
    const patientTask = await PatientTask.create(input).save();
    const forPatient = await Patient.findOne(patientId);
    const parentTask = await Task.findOne(taskId);

    patientTask.creatorUser = await User.findOne(req.session.userId);
    patientTask.forPatient = forPatient;
    patientTask.parentTask = parentTask;

    patientTask.save();
    return patientTask;
  }

  @Mutation(() => String)
  async deletePatientTask(@Arg("PatientTaskId") id: number): Promise<String> {
    PatientTask.delete(id);
    return "Untersuchung gelöscht.";
  }
}
