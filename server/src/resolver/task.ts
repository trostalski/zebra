import {
  Arg,
  Field,
  Mutation,
  ObjectType,
  Query,
  Resolver
} from "type-graphql";
import { Task } from "../entities/Task";
import { TaskInput } from "./utils/resolverInputs";

@Resolver(Task)
export class TaskResolver {
  @Query(() => [Task], { nullable: true })
  // list all Tasks
  async listTasks() {
    return await Task.find({});
  }

  @Mutation(() => Task)
  // create a new Tak
  async createTask(
    @Arg("taskData") input: TaskInput
  ): Promise<Task> {
    const task = await Task.create(input).save();
    return task;
  }

  @Mutation(() => String)
  // delete Task
  async deleteTask(@Arg("taskId") id: number): Promise<String> {
    Task.delete(id);
    return "Task deleted";
  }
}
