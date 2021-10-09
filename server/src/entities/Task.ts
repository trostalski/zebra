import { Field, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BaseEntity } from "typeorm";

@ObjectType()
@Entity("procedure")
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
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;
}
