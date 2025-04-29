import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Department } from 'src/department/department.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType() // Marks this class as a GraphQL object type
@Entity()
export class SubDepartment {
  @Field(() => String) // Indicates a UUID field in the GraphQL schema
  @PrimaryGeneratedColumn('uuid')
  id?: number;

  @Field(() => String, { nullable: true }) // Nullable string field for the name
  @Column({ nullable: true })
  name: string;

  @Field(() => Department) // Relation to the Department entity
  @ManyToOne(() => Department, (department) => department.subDepartments, {
    onDelete: 'CASCADE',
  })
  department: Department;

  @Field(() => String) // Indicates an integer field for the departmentId
  @Column()
  departmentId: number;

  @Field(() => Date, { nullable: true }) // Nullable Date field for createdAt
  @Column({ nullable: true })
  createdAt: Date;

  @Field(() => Date, { nullable: true }) // Nullable Date field for updatedAt
  @Column({ nullable: true })
  updatedAt: Date;
}

