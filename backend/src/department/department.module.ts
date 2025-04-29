import { Module } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { DepartmentResolver } from './department.resolver';
import { JwtService } from '@nestjs/jwt';
import { departmentProviders } from './department.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  providers: [DepartmentService, DepartmentResolver, JwtService, ...departmentProviders],
  imports: [DatabaseModule],
})
export class DepartmentModule {}
