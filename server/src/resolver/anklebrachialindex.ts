import { ANKLEBRACHIALINDEX } from "../constants";
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
    @Arg("patientId") patientId: number,
    @Arg("AbiInput") abiInput: AnkleBrachialIndexInput,
    @Ctx() { req }: MyContext
  ): Promise<AnkleBrachialIndex> {
    // createTask(
    //   "Ankle Brachial Index (ABI)",
    //   "Quotient aus Blutdruck am Unterschenkel und Blutdruck am Oberarm"
    // );
    const patientTask = await PatientTask.create({
      parentTask: await Task.findOne(ANKLEBRACHIALINDEX),
      creatorId: req.session.userId,
      patientId: patientId,
      forPatient: await Patient.findOne(patientId),
      creatorUser: await User.findOne(req.session.userId),
    }).save();

    const result = await AnkleBrachialIndex.create({
      leftResult: Math.round(((abiInput.leftLeg / abiInput.leftArm) * 10) / 10),
      rightResult:
        Math.round((abiInput.rightLeg / abiInput.rightArm) * 10) / 10,
      ...abiInput,
      patientTask: patientTask,
    }).save();
    return result;
  }
}
