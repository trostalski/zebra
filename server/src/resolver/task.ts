import { Task } from "../entities/Task";
import {
  Arg,
  Field,
  InputType,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";
import { TaskInput } from "./utils";



@ObjectType()
class TaskOutput {
  @Field(() => String, { nullable: true })
  message?: string;

  @Field(() => Task, { nullable: true })
  task?: Task;
}

@Resolver(Task)
export class TaskResolver {
  //list all tasks
  @Query(() => [Task], { nullable: true })
  async listTasks() {
    return await Task.find({});
  }

  @Mutation(() => TaskOutput)
  async addTask(@Arg("taskData") input: TaskInput): Promise<TaskOutput> {
    const task = await Task.create(input).save();
    return { task };
  }

  @Mutation(() => TaskOutput)
  async deleteTask(@Arg("taskId") id: number): Promise<TaskOutput>{
    Task.delete(id)
    return {message: "Task deleted"}
  }
}
