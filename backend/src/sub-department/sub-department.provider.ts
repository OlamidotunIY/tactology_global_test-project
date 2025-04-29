import { DataSource } from 'typeorm';
import { SubDepartment } from './sub-department.entity';

export const subDepartmentProviders = [
  {
    provide: 'SUB_DEPARTMENT_REPO',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(SubDepartment),
    inject: ['DATA_SOURCE'],
  },
];
