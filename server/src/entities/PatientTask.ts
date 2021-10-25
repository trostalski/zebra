import { Field, Int, ObjectType } from "type-graphql";
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

@ObjectType()
@Entity()
export class PatientTask extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @ManyToOne(() => Task, (task) => task.patientTasks, { onDelete: "CASCADE" })
  parentTask: Task;

  @Field()
  @Column()
  creatorId!: number;

  @Field()
  @ManyToOne(() => User, (user) => user.patientTasks, { onDelete: "CASCADE" })
  creatorUser?: User;

  @Field(() => Int)
  @Column({ type: "int" })
  patientId!: number;

  @Field()
  @ManyToOne(() => Patient, (patient) => patient.patientTasks, {
    onDelete: "CASCADE",
  })
  forPatient?: Patient;

  @Field(() => Boolean)
  @Column({ default: false })
  completed!: boolean;

  @Field(() => String)
  @Column({ nullable: true })
  result?: string;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;
}
