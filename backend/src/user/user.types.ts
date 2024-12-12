import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int, { nullable: true })
  id: number;

  @Field({ nullable: true })
  fullname: string;

  @Field({ nullable: true })
  email: string;

  @Field({ nullable: true })
  password?: string;

  @Field({ nullable: true })
  createdAt: Date;

  @Field({ nullable: true })
  updatedAt: Date;
}
