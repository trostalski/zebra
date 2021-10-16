import { Field, ObjectType } from "type-graphql";
import { Entity, Column } from "typeorm";
import { Task } from "./Task";

@ObjectType()
@Entity()
export class AnkleBrachialIndex extends Task {
  @Field()
  @Column()
  rightArm: number;

  @Field()
  @Column()
  leftArm: number;

  @Field()
  @Column()
  rightLeg: number;

  @Field()
  @Column()
  leftLeg: number;

  @Field()
  @Column({type: "real", nullable: true})
  leftResult: number;

  @Field()
  @Column({type: "real", nullable: true})
  rightResult: number;
}
