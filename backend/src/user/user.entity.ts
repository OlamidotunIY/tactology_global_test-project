import { ObjectType, Field } from '@nestjs/graphql';
import { Department } from 'src/department/department.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType() // Marks the entity as a GraphQL object type
@Entity()
export class User {
  @Field(() => String) // Specify the GraphQL type
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Field(() => String, { nullable: true })
  @Column({ unique: true, nullable: true })
  username: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  password?: string;

  @Field(() => [Department], { nullable: true }) // Ensure this matches your Department GraphQL type
  @OneToMany(() => Department, (department) => department.user)
  departments: Department[];

  @Field(() => Date, { nullable: true })
  @Column({ nullable: true })
  createdAt: Date;

  @Field(() => Date, { nullable: true })
  @Column({ nullable: true })
  updatedAt: Date;
}

