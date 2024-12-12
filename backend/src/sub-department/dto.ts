import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, MinLength, IsString, IsArray } from 'class-validator';

@InputType()
export class SubDepartmentDto {
  @Field()
  @IsNotEmpty({ message: 'Name is required.' })
  @IsString({ message: 'Name must be a string.' })
  @MinLength(2, { message: 'Name must be at least 2 characters.' })
  name: string;
}
