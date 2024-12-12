import { Module } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { DepartmentResolver } from './department.resolver';
import { PrismaService } from 'src/prisma.services';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [DepartmentService, DepartmentResolver, PrismaService, JwtService],
})
export class DepartmentModule {}
