import { AnkleBrachialIndex } from "../entities/AnkleBrachialIndex";
import { PatientTask } from "../entities/PatientTask";
import { User } from "../entities/User";
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
import { AnkleBrachialIndexInput } from "./utils/resolverInputs";
import { Patient } from "../entities/Patient";
import { Task } from "../entities/Task";

@Resolver(AnkleBrachialIndex)
export class AnkleBrachialIndexResolver {
  @FieldResolver(() => User)
  creator(@Root() task: PatientTask) {
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
  async createAbi(
    @Arg("AbiInput") abiInput: AnkleBrachialIndexInput,
    @Ctx() { req }: MyContext
  ): Promise<AnkleBrachialIndex> {
    console.log("current ID", req.session.userId);
    const result = await AnkleBrachialIndex.create({
      name: "Ankle Brachial Index (ABI)",
      explanation:
        "Quotient aus Blutdruck am Unterschenkel und Blutdruck am Oberarm",
      creatorId: req.session.userId,
      leftResult: Math.round(((abiInput.leftLeg / abiInput.leftArm) * 10) / 10),
      rightResult:
        Math.round((abiInput.rightLeg / abiInput.rightArm) * 10) / 10,
      ...abiInput,
    }).save();
    return result;
  }
}
