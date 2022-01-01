import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Patient } from "./Patient";
import { Task } from "./Task";
import { User } from "./User";

/*
  Parent class for all Patient related Tasks.
*/

@ObjectType()
@Entity()
export class PatientTask extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @ManyToOne(() => Task, (task) => task.patientTasks, { onDelete: "CASCADE" })
  parentTask?: Task;

  @Field()
  @ManyToOne(() => User, (user) => user.patientTasks, { onDelete: "CASCADE" })
  creatorUser?: User;

  @Field()
  @ManyToOne(() => Patient, (patient) => patient.patientTasks, {
    onDelete: "CASCADE",
    nullable: true,
  })
  forPatient?: Patient;

  @Field()
  @Column()
  timepoint: String;

  @Field({ nullable: true })
  @Column({ nullable: true, type: "text" })
  comment?: string;

  @Field(() => Boolean)
  @Column({ default: false })
  urgent: boolean;

  @Field(() => Boolean)
  @Column({ default: false })
  completed!: boolean;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  result?: string;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;
}
