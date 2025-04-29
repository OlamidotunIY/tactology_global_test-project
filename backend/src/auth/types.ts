import { ObjectType, Field } from '@nestjs/graphql';
import { User } from 'src/user/user.entity';

@ObjectType()
export class RegisterResponse {
  @Field(() => User, { nullable: true })
  user?: User;

  @Field()
  accessToken: string;
}

@ObjectType()
export class LoginResponse {
  @Field(() => User, { nullable: true })
  user: User;

  @Field()
  accessToken: string;
}
