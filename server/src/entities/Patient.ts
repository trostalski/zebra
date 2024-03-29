import { Field, Int, ObjectType } from "type-graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  OneToMany,
} from "typeorm";
import { PatientTask } from "./PatientTask";

@ObjectType()
@Entity()
export class Patient extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  firstname!: string;

  @Field()
  @Column()
  lastname!: string;

  @Field()
  @Column()
  room!: number;

  @Field(() => Int)
  @Column()
  age!: number;

  @Field()
  @Column()
  diagnosis!: string;

  @Field(() => [PatientTask])
  @OneToMany(() => PatientTask, (task) => task.forPatient, { nullable: true })
  patientTasks!: PatientTask[] | null;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;
}
