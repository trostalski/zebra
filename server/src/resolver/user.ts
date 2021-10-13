import { User } from "../entities/User";
import {
  Arg,
  Ctx,
  Field,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";
import { RegisterInput } from "./utils";
import argon2 from "argon2";
import { MyContext } from "src/types";

@ObjectType()
export class UserOutput {
  @Field(() => String, { nullable: true })
  message?: string;

  @Field(() => User, { nullable: true })
  user?: User;
}

// list all users in DB
@Resolver(User)
export class UserResolver {
  @Query(() => [User], { nullable: true })
  async listUsers() {
    return await User.find({});
  }

  //Registration
  @Mutation(() => UserOutput)
  async register(@Arg("Userdata") input: RegisterInput): Promise<UserOutput> {
    input.password = await argon2.hash(input.password);
    try {
      const user = await User.create(input).save();
      return { user };
    } catch (err) {
      if (err.detail.includes("@")) {
        return { message: "email already taken." };
      } else {
        return { message: "username already taken" };
      }
    }
  }

  //Login
  @Mutation(() => UserOutput)
  async login(
    @Ctx() {req}: MyContext,
    @Arg("usernameOrEmail") usernameOrEmail: string,
    @Arg("password") password: string
  ): Promise<UserOutput> {
    try {
      const user = await User.findOne(
        usernameOrEmail.includes("@")
          ? { where: { email: usernameOrEmail } }
          : { where: { username: usernameOrEmail } }
      );
      if (!user) return { message: "user does not exist" };

      const valid = await argon2.verify(user.password, password);
      req.session.userId = user.id

      if (!valid) {
        return { message: "wrong password" };
      } else {
        return { user };
      }
    } catch (err) {
      if (err.message.includes("password"))
        return { message: "provide a password" };
      else return { message: "unknown login error" };
    }
  }
}
