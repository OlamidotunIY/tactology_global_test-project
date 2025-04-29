import { DataSource } from 'typeorm';
import { Department } from './department.entity';
import { DepartmentDto } from './dto';

export const departmentProviders = [
  {
    provide: 'DEPARTMENT_REPO',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Department),
    inject: ['DATA_SOURCE'],
  },
];
