import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SubDepartmentService } from './sub-department.service';
import { UseFilters, UseGuards } from '@nestjs/common';
import { GraphQLErrorFilter } from 'src/filters/custom-exception.filter';
import { GraphqlAuthGuard } from 'src/auth/graphql-auth.guard';
import { SubDepartment } from './sub-department.entity';
import { SubDepartmentDto } from './dto';

@Resolver()
export class SubDepartmentResolver {
  constructor(private readonly subDepartmentService: SubDepartmentService) {}

  @UseFilters(GraphQLErrorFilter)
  @UseGuards(GraphqlAuthGuard)
  @Mutation(() => SubDepartment)
  async createSubDepartment(@Args('dto') dto: SubDepartmentDto) {
    return this.subDepartmentService.createSubDepartment(dto);
  }

  @Mutation(() => SubDepartment)
  async updateSubDepartment(
    @Args('id') id: number,
    @Args('name') name: string,
  ) {
    return this.subDepartmentService.updateSubDepartment(id, name);
  }

  @Mutation(() => SubDepartment)
  async deleteSubDepartment(@Args('id') id: number) {
    return this.subDepartmentService.deleteSubDepartment(id);
  }

  @Query(() => SubDepartment)
  async getSubDepartment(@Args('id') id: number) {
    return this.subDepartmentService.getSubDepartment(id);
  }

  @Query(() => [SubDepartment])
  async getSubDepartments(@Args('departmentId') departmentId: number) {
    return this.subDepartmentService.getSubDepartments(departmentId);
  }
}
