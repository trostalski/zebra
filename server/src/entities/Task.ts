import { Field, ObjectType } from "type-graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToOne,
} from "typeorm";
import { Patient } from "./Patient";
import { User } from "./User";

@ObjectType()
@Entity()
export class Task extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  name!: string;

  @Field()
  @Column()
  explanation?: string;

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
  patient: Patient;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;
}
