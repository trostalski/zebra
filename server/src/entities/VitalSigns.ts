import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn
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
  @Column({ default: true })
  bloodPressureRequired: boolean;

  @Field()
  @Column()
  bloodPressureResult: number;

  @Field()
  @Column({ default: true })
  pulseRequired: boolean;

  @Field()
  @Column()
  pulseResult: number;

  @Field()
  @Column({ default: true })
  temperatureRequired: boolean;

  @Field()
  @Column()
  temperatureResult: number;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;
}
