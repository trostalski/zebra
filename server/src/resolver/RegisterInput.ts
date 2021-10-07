import { User } from "../entities/User";
import { Field, InputType } from "type-graphql";


@InputType()
export class RegisterInput implements Partial<User> {
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
