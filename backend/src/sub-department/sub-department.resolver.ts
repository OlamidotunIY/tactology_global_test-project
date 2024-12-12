import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SubDepartmentService } from './sub-department.service';
import { UseFilters, UseGuards } from '@nestjs/common';
import { GraphQLErrorFilter } from 'src/filters/custom-exception.filter';
import { GraphqlAuthGuard } from 'src/auth/graphql-auth.guard';
import { Request } from 'express';
import { SubDepartment } from './sub-department.types';

@Resolver()
export class SubDepartmentResolver {
  constructor(private readonly subDepartmentService: SubDepartmentService) {}

  @UseFilters(GraphQLErrorFilter)
  @UseGuards(GraphqlAuthGuard)
  @Mutation(() => SubDepartment)
  async createSubDepartment(
    @Args('name') name: string,
    @Args('departmentId') departmentId: number,
  ) {
    return this.subDepartmentService.createSubDepartment(name, departmentId);
  }

  @Mutation(() => SubDepartment)
  async updateSubDepartment(
    @Args('id') id: string,
    @Args('name') name: string,
  ) {
    return this.subDepartmentService.updateSubDepartment(id, name);
  }

  @Mutation(() => SubDepartment)
  async deleteSubDepartment(@Args('id') id: string) {
    return this.subDepartmentService.deleteSubDepartment(id);
  }

  @Query(() => SubDepartment)
  async getSubDepartment(@Args('id') id: string) {
    return this.subDepartmentService.getSubDepartment(id);
  }

  @Query(() => [SubDepartment])
  async getSubDepartments(@Args('departmentId') departmentId: number) {
    return this.subDepartmentService.getSubDepartments(departmentId);
  }
}
