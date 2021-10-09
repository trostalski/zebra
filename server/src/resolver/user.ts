import { User } from "../entities/User";
import {
  Arg,
  Field,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";
import { RegisterInput } from "./utils";

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

      if (user.password !== password) {
        return { message: "wrong password" };
      } else return { user };
    } catch (err) {
      if (err.message.includes("password"))
        return { message: "provide a password" };
      else return { message: "unknown login error" };
    }
  }
}
