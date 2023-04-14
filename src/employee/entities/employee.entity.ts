/* eslint-disable prettier/prettier */

import { Field, ObjectType } from '@nestjs/graphql';
import { Project } from 'src/project/entities/project.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType() // This is for GraphQL Queries
@Entity() // So the TypeORM will know that this is an entity
export class Employee {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  firstName: string;

  @Field()
  @Column()
  lastName: string;

  @Field()
  @Column()
  designation: string;

  @Field()
  @Column()
  city: string;

  // This is not a column in the database, but a virtual field that represents the relationship between the Project and Employee entities
  @Field()
  @ManyToOne(() => Project, (project) => project.employees)
  project: Project;

  // This is a column in the database that will be used to store the projectId
  @Field()
  @Column()
  projectId: string;
}
