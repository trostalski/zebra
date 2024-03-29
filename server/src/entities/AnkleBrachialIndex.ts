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
export class AnkleBrachialIndex extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @OneToOne(() => PatientTask, { onDelete: "CASCADE" })
  @JoinColumn()
  patientTask!: PatientTask;

  @Field()
  @Column()
  rightArm?: number;

  @Field()
  @Column()
  leftArm?: number;

  @Field()
  @Column()
  rightLeg?: number;

  @Field()
  @Column()
  leftLeg?: number;

  @Field(() => Float)
  @Column({ type: "real", nullable: true })
  leftAbi?: number;

  @Field(() => Float)
  @Column({ type: "real", nullable: true })
  rightAbi?: number;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;
}
