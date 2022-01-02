import { Patient } from "../entities/Patient";
import { Task } from "../entities/Task";
import { User } from "../entities/User";
import { MyContext } from "src/types";
import { Arg, Ctx, Int, Mutation, Query, Resolver } from "type-graphql";
import { PatientTask } from "../entities/PatientTask";
import { PatientTaskInput } from "./utils/resolverInputs";
import { getConnection } from "typeorm";

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

  // get all rooms where patients have task assigned
  @Query(() => [Int])
  async patientTaskRooms(): Promise<number[]> {
    const result: number[] = [];
    const rooms = await getConnection().query(
      `
      select distinct patient.room 
      from patient_task 
      join patient on patient_task."forPatientId" = patient.id 
      order by patient.room
      `
    );
    rooms.forEach((room: { [x: string]: number }) => {
      result.push(room["room"]);
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

    return await patientTask.save();
  }

  @Mutation(() => String)
  async deletePatientTask(@Arg("PatientTaskId") id: number): Promise<String> {
    PatientTask.delete(id);
    return "Untersuchung gelöscht.";
  }
}
