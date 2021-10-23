import {
  Arg,
  Field,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";
import { getConnection } from "typeorm";
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

  @Mutation(() => PatientTaskOutput)
  async deletePatientTask(
    @Arg("PatientTaskId") id: number
  ): Promise<PatientTaskOutput> {
    PatientTask.delete(id);
    return { message: "Task deleted" };
  }
}
