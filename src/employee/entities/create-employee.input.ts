/* eslint-disable prettier/prettier */
import { Field, InputType } from '@nestjs/graphql';

@InputType() // This is for GraphQL Mutations
export class EmployeeCreateDTO {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  designation: string;

  @Field()
  city: string;

  @Field()
  projectId: string;
}
