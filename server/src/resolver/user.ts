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
import { RegisterInput } from "./utils/resolverInputs";
import argon2 from "argon2";
import { MyContext } from "src/types";

@ObjectType()
export class UserOutput {
  @Field(() => String, { nullable: true })
  message?: string;

  @Field(() => User, { nullable: true })
  user?: User;
}

@Resolver(User)
export class UserResolver {
  @Query(() => [User], { nullable: true })
  // list all users in DB
  async listUsers() {
    return await User.find({});
  }

  @Query(() => User, { nullable: true })
  me(@Ctx() { req }: MyContext) {
    // you are not logged in
    if (!req.session.userId) {
      return null;
    }

    return User.findOne(req.session.userId);
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
    @Ctx() { req }: MyContext,
    @Arg("email") email: string,
    @Arg("password") password: string
  ): Promise<UserOutput> {
    try {
      const user = await User.findOne({ where: { email: email } });
      if (!user) return { message: "email does not exist" };

      const valid = await argon2.verify(user.password, password);
      console.log(user.id);
      req.session.userId = user.id;
      console.log(req.session.userId);

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

  @Mutation(() => Boolean)
  logout(@Ctx() { req, res }: MyContext) {
    return new Promise((resolve) => {
      req.session.destroy((err) => {
        res.clearCookie("qid");
        if (err) {
          console.log(err);
          resolve(false);
          return;
        }
        resolve(true);
      });
    });
  }
}
