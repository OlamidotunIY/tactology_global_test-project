import { Module } from '@nestjs/common';
import { SubDepartmentService } from './sub-department.service';
import { SubDepartmentResolver } from './sub-department.resolver';
import { JwtService } from '@nestjs/jwt';
import { subDepartmentProviders } from './sub-department.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  providers: [
    SubDepartmentService,
    SubDepartmentResolver,
    JwtService,
    ...subDepartmentProviders,
  ],
  imports: [DatabaseModule],
})
export class SubDepartmentModule {}
