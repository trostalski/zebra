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
export class VitalSigns extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @OneToOne(() => PatientTask, { onDelete: "CASCADE" })
  @JoinColumn()
  patientTask!: PatientTask;

  @Field()
  @CreateDateColumn({ default: true })
  bloodPressureRequired: boolean;

  @Field()
  @CreateDateColumn({ default: true })
  bloodPressureResult: number;

  @Field()
  @CreateDateColumn({ default: true })
  pulseRequired: boolean;

  @Field()
  @CreateDateColumn({ default: true })
  pulseResult: number;

  @Field()
  @CreateDateColumn({ default: true })
  temperatureRequired: boolean;

  @Field()
  @CreateDateColumn({ default: true })
  temperatureResult: number;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;
}
