import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DepartmentService } from './department.service';;
import { UseFilters, UseGuards } from '@nestjs/common';
import { GraphQLErrorFilter } from 'src/filters/custom-exception.filter';
import { GraphqlAuthGuard } from 'src/auth/graphql-auth.guard';
import { Department } from './department.types';
import { Request } from 'express';
import { DepartmentDto } from './dto';

@Resolver()
export class DepartmentResolver {
  constructor(
    private readonly departmentService: DepartmentService,
  ) {}

  @UseFilters(GraphQLErrorFilter)
  @UseGuards(GraphqlAuthGuard)
  @Mutation(() => Department)
  async createDepartment(
    @Args('data') data: DepartmentDto,
    @Context() context: { req: Request },
  ) {
    return this.departmentService.createDepartment(
      data.name,
      context.req.user.sub,
      data.subDepartment,
    );
  }

  @UseFilters(GraphQLErrorFilter)
  @UseGuards(GraphqlAuthGuard)
  @Mutation(() => Department)
  async updateDepartment(@Args('id') id: string, @Args('name') name: string) {
    return this.departmentService.updateDepartment(id, name);
  }

  @UseFilters(GraphQLErrorFilter)
  @UseGuards(GraphqlAuthGuard)
  @Mutation(() => Department)
  async deleteDepartment(@Args('id') id: string) {
    return this.departmentService.deleteDepartment(id);
  }

  @UseFilters(GraphQLErrorFilter)
  @UseGuards(GraphqlAuthGuard)
  @Query(() => Department)
  async getDepartment(@Args('id') id: string) {
    return this.departmentService.getDepartment(id);
  }

  @UseFilters(GraphQLErrorFilter)
  @UseGuards(GraphqlAuthGuard)
  @Query(() => [Department])
  async getDepartments(@Context() context: { req: Request }) {
    return this.departmentService.getDepartments(context.req.user.sub);
  }
}
