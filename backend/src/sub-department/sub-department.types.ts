import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Department } from 'src/department/department.types';

@ObjectType()
export class SubDepartment {
  @Field(() => ID, { nullable: true })
  id?: number;

  @Field({ nullable: true })
  name: string;

  @Field(() => Department, { nullable: true })
  department: Department;

  @Field({ nullable: true })
  createdAt: Date;

  @Field({ nullable: true })
  updatedAt: Date;
}
