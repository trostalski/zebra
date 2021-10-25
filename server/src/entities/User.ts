import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity, Column,
  CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn
} from "typeorm";
import { PatientTask } from "./PatientTask";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column({ unique: true })
  username!: string;

  @Field()
  @Column({ unique: true })
  email!: string;

  @Field()
  @Column()
  firstname!: string;

  @Field()
  @Column()
  lastname!: string;

  @Column()
  password!: string;

  @Field()
  @Column()
  department!: string;

  @Field()
  @Column()
  position!: string;

  @OneToMany(() => PatientTask, (task) => task.creatorUser)
  patientTasks: PatientTask[];

  @Field()
  @CreateDateColumn()
  createdAt!: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt!: Date;
}
