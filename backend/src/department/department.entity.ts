import { ObjectType, Field, Int } from '@nestjs/graphql';
import { SubDepartment } from 'src/sub-department/sub-department.entity';
import { User } from 'src/user/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType() // Marks the class as a GraphQL object type
@Entity()
export class Department {
  @Field(() => String) // Indicates a UUID field
  @PrimaryGeneratedColumn('uuid')
  id?: number;

  @Field(() => String, { nullable: true }) // GraphQL field for the name
  @Column({ nullable: true })
  name: string;

  @Field(() => String) // Assuming userId is an integer in GraphQL schema
  @Column()
  userId: number;

  @Field(() => User, { nullable: true }) // Link to the User GraphQL object
  @ManyToOne(() => User, (user) => user.departments, { nullable: true })
  user: User;

  @Field(() => [SubDepartment], { nullable: true }) // GraphQL field for subDepartments
  @OneToMany(() => SubDepartment, (subDepartment) => subDepartment.department, {
    nullable: true,
    cascade: true,
    onDelete: 'CASCADE',
  })
  subDepartments?: SubDepartment[];

  @Field(() => Date, { nullable: true }) // GraphQL field for createdAt
  @Column({ nullable: true })
  createdAt: Date;

  @Field(() => Date, { nullable: true }) // GraphQL field for updatedAt
  @Column({ nullable: true })
  updatedAt: Date;
}
