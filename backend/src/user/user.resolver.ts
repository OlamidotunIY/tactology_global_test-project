import { Resolver, Query, Context, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { Request } from 'express';
import { UseGuards } from '@nestjs/common';
import { GraphqlAuthGuard } from 'src/auth/graphql-auth.guard';
import { User } from './user.types';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @UseGuards(GraphqlAuthGuard)
  @Mutation(() => User)
  async updateProfile(
    @Args('fullname') fullname: string,
    @Context() context: { req: Request },
  ) {
    const userId = context.req.user.sub;
    return this.userService.updateProfile(userId, fullname);
  }
}
