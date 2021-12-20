import { Field, Float, ObjectType } from "type-graphql";
import {
  Entity,
  Column,
  BaseEntity,
  OneToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { PatientTask } from "./PatientTask";

@ObjectType()
@Entity()
export class DrawBlood extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @OneToOne(() => PatientTask, { onDelete: "CASCADE" })
  @JoinColumn()
  patientTask!: PatientTask;

  @Field()
  @CreateDateColumn()
  FlaskType: string;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;
}

