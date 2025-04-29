import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { JwtService } from '@nestjs/jwt';
import { userProviders } from './user.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  providers: [
    ...userProviders,
    UserService,
    UserResolver,
    JwtService,
  ],
  imports: [DatabaseModule],
})
export class UserModule {}
