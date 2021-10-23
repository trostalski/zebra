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

@ObjectType()
@Entity()
export class PatientTask extends BaseEntity {
  @Field()
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
  creatorUser: User;

  @Field()
  @Column()
  patientId!: number;

  @Field()
  @ManyToOne(() => Patient, (patient) => patient.patientTasks, { onDelete: "CASCADE" })
  forPatient: Patient;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;
}
