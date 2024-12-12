import { Module } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/prisma.services';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [AuthResolver, AuthService, JwtService, PrismaService]
})
export class AuthModule {

}
