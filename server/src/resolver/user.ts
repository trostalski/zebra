import { User } from "../entities/User";
import {
  Arg,
  Field,
  InputType,
  Mutation,
  Query,
  Resolver,
} from "type-graphql";

@InputType()
class RegisterInput {

  @Field(() => String)
  username: string;

  @Field(() => String)
  firstname: string;

  @Field(() => String)
  lastname: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;

  @Field(() => String)
  department: string;

  @Field(() => String)
  position: string;
}

@Resolver(User)
export class UserResolver {
  @Query(() => [User], { nullable: true })
  async listUsers() {
    return await User.find({});
  }

  @Mutation(() => User)
  async register(
    @Arg("data") credentials: RegisterInput
  ): Promise<User | String> {
    try {
      const user = User.create({
        username: credentials.username,
        firstname: credentials.firstname,
        lastname: credentials.lastname,
        email: credentials.email,
        department: credentials.department,
        position: credentials.position,
        password: credentials.password,
      }).save();
      return await user;
    } catch (err) {
      if (err.detail.includes("already exists.")) {
        return await "email already taken.";
      } else return "registration failed.";
    }
  }

  @Mutation(() => User)
  async login(
    @Arg("usernameOrEmail") usernameOrEmail: string,
    @Arg("password", { nullable: true }) password: string
  ): Promise<User[] | undefined> {
    const user = User.find(
      usernameOrEmail.includes("@")
        ? { where: { email: usernameOrEmail } }
        : { where: { username: usernameOrEmail } }
    );

    console.log("das ist der BRE: ", user);
    return user;
  }
}
