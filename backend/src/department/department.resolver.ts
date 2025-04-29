import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DepartmentService } from './department.service';
import { UseFilters, UseGuards } from '@nestjs/common';
import { GraphQLErrorFilter } from 'src/filters/custom-exception.filter';
import { GraphqlAuthGuard } from 'src/auth/graphql-auth.guard';
import { Request } from 'express';
import { DeleteResponse, DepartmentDto, PaginatedDepartments } from './dto';
import { Department } from './department.entity';

@Resolver()
export class DepartmentResolver {
  constructor(private readonly departmentService: DepartmentService) {}

  @UseFilters(GraphQLErrorFilter)
  @UseGuards(GraphqlAuthGuard)
  @Mutation(() => Department)
  async createDepartment(
    @Args('input') data: DepartmentDto,
    @Context() context: { req: Request },
  ) {
    return this.departmentService.createDepartment(context.req.user.sub, data);
  }

  @UseFilters(GraphQLErrorFilter)
  @UseGuards(GraphqlAuthGuard)
  @Mutation(() => Department)
  async updateDepartment(@Args('id') id: string, @Args('name') name: string) {
    return this.departmentService.updateDepartment(id, name);
  }

  @UseFilters(GraphQLErrorFilter)
  @UseGuards(GraphqlAuthGuard)
  @Mutation(() => DeleteResponse)
  async deleteDepartment(@Args('id') id: string) {
    const deleteResult = await this.departmentService.deleteDepartment(id);
    if (deleteResult.affected === 0) {
      throw new Error('Department not found');
    }
    return { success: true, message: 'Department deleted successfully' };
  }

  @UseFilters(GraphQLErrorFilter)
  @UseGuards(GraphqlAuthGuard)
  @Query(() => Department)
  async getDepartment(@Args('id') id: string) {
    return this.departmentService.getDepartment(id);
  }

  @UseFilters(GraphQLErrorFilter)
  @UseGuards(GraphqlAuthGuard)
  @Query(() => PaginatedDepartments)
  async getDepartments(
    @Context() context: { req: Request },
    @Args('page', { type: () => Int, defaultValue: 1 }) page: number,
    @Args('limit', { type: () => Int, defaultValue: 10 }) limit: number,
  ) {
    return this.departmentService.getDepartments(
      context.req.user.sub,
      page,
      limit,
    );
  }
}
