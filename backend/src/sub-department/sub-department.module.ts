import { Module } from '@nestjs/common';
import { SubDepartmentService } from './sub-department.service';
import { SubDepartmentResolver } from './sub-department.resolver';
import { PrismaService } from 'src/prisma.services';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [SubDepartmentService, SubDepartmentResolver, PrismaService, JwtService]
})
export class SubDepartmentModule {}
