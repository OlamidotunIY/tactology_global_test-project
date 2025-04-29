import { Module } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { userProviders } from 'src/user/user.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  providers: [
    ...userProviders,
    AuthResolver,
    AuthService,
    JwtService,
  ],
  imports: [DatabaseModule],
})
export class AuthModule {}
