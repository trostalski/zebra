import { AnkleBrachialIndex } from "../entities/AnkleBrachialIndex";
import { Task } from "../entities/Task";
import { User } from "../entities/User";
import { MyContext } from "src/types";
import {
  Arg,
  Ctx,
  FieldResolver,
  Mutation,
  Resolver,
  Root,
} from "type-graphql";
import { AnkleBrachialIndexInput } from "./utils/resolverInputs";

@Resolver(AnkleBrachialIndex)
export class AnkleBrachialIndexResolver {
  @FieldResolver(() => User)
  creator(@Root() task: Task) {
    return User.findOne(task.creatorId);
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
