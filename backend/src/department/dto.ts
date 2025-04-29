import { InputType, Field, ObjectType, Int } from '@nestjs/graphql';
import { IsNotEmpty, MinLength, IsString, IsArray } from 'class-validator';
import { SubDepartmentDto } from 'src/sub-department/dto';
import { Department } from './department.entity';

@InputType()
export class DepartmentDto {
  @Field()
  @IsNotEmpty({ message: 'Name is required.' })
  @IsString({ message: 'Name must be a string.' })
  @MinLength(2, { message: 'Name must be at least 2 characters.' })
  name: string;

  @Field(() => [SubDepartmentDto], { nullable: true })
  @IsArray({ message: 'Sub Department must be an array.' })
  subDepartment?: [SubDepartmentDto];
}

@ObjectType()
export class PaginatedDepartments {
  @Field(() => [Department])
  data: Department[];

  @Field(() => Int)
  total: number;

  @Field(() => Int)
  page: number;

  @Field(() => Int)
  lastPage: number;
}

@ObjectType()
export class DeleteResponse {
  @Field()
  success: boolean;

  @Field({ nullable: true })
  message?: string;
}