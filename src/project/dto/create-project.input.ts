import { InputType, Int, Field } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class CreateProjectInput {
  @Field()
  @Column()
  name: string;

  @Field(() => Int) // Scalar Types in GraphQL, since number is not a GraphQL type
  @Column()
  code: number;
}
