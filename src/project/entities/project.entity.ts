import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Employee } from 'src/employee/entities/employee.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Project {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  name: string;

  @Field(() => Int) // Scalar Types in GraphQL, since number is not a GraphQL type
  @Column()
  code: number;

  // This is not a column in the database, but a virtual field that represents the relationship between the Project and Employee entities
  @Field(() => [Employee], { nullable: true }) // Some projects must some times has no employees
  @OneToMany(() => Employee, (employee) => employee.project)
  employees: Employee[];
}
