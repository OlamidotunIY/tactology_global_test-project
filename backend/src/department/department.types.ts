import { ObjectType, Field, ID } from '@nestjs/graphql';
import { SubDepartment } from 'src/sub-department/sub-department.types';
import { User } from 'src/user/user.types';

@ObjectType()
export class Department {
  @Field(() => ID, { nullable: true })
  id?: number;

  @Field({ nullable: true })
  name: string;

  @Field(() => User, { nullable: true })
  user: User;

  @Field(() => [SubDepartment], { nullable: true })
  subDepartments?: SubDepartment[];

  @Field({ nullable: true })
  createdAt: Date;

  @Field({ nullable: true })
  updatedAt: Date;
}
