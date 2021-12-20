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
export class VenousCatheter extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @OneToOne(() => PatientTask, { onDelete: "CASCADE" })
  @JoinColumn()
  patientTask!: PatientTask;

  @Field()
  @Column()
  location: string;

  @Field()
  @Column()
  catheterType: string;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;
}


