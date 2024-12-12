import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, MinLength, IsString, IsArray } from 'class-validator';
import { SubDepartmentDto } from 'src/sub-department/dto';

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
