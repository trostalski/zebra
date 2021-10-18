import { Field, ObjectType } from "type-graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";
import { Task } from "./Task";
import { Patient } from "./Patient";
import { User } from "./User";

@ObjectType()
@Entity()
export class PatientTask extends Task {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  creatorId?: number;

  @Field()
  @ManyToOne(() => User, (user) => user.tasks)
  creator: User;

  @Field()
  @Column()
  patientId: number;

  @ManyToOne(() => Patient, (patient) => patient.tasks, { onDelete: "CASCADE" })
  forPatient: Patient;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;
}
