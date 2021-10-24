import { Patient } from "../entities/Patient";
import { Task } from "../entities/Task";
import { User } from "../entities/User";
import { MyContext } from "src/types";
import {
  Arg,
  Ctx,
  Field,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";
import { PatientTask } from "../entities/PatientTask";

@ObjectType()
class PatientTaskOutput {
  @Field(() => String, { nullable: true })
  message?: string;

  @Field(() => PatientTask, { nullable: true })
  task?: PatientTask;
}

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

  @Query(() => [PatientTask], { nullable: true })
  async specificPatientTasks(
    @Arg("input") input: number
  ): Promise<PatientTask[]> {
    const result = await PatientTask.find({
      where: { patientId: input },
      relations: ["creatorUser", "forPatient", "parentTask"],
    });
    return result;
  }

  @Mutation(() => PatientTask)
  async createPatientTask(
    @Arg("patientId") patientId: number,
    @Arg("taskId") taskId: number,
    @Ctx() { req }: MyContext
  ): Promise<PatientTask> {
    const patientTask = await PatientTask.create({
      parentTask: await Task.findOne(taskId),
      creatorId: req.session.userId,
      patientId: patientId,
      forPatient: await Patient.findOne(patientId),
      creatorUser: await User.findOne(req.session.userId),
    }).save();
    return patientTask;
  }

  @Mutation(() => PatientTaskOutput)
  async deletePatientTask(
    @Arg("PatientTaskId") id: number
  ): Promise<PatientTaskOutput> {
    PatientTask.delete(id);
    return { message: "Task deleted" };
  }
}
