import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { SubDepartment } from './sub-department.entity';
import { SubDepartmentDto } from './dto';

@Injectable()
export class SubDepartmentService {
  constructor(
    @Inject('SUB_DEPARTMENT_REPO')
    private readonly subDepartmentRepository: Repository<SubDepartment>, // Replace with actual type
  ) {}

  async getSubDepartment(id: number) {
    return this.subDepartmentRepository.findOne({
      where: { id: id },
    });
  }

  async createSubDepartment(dto: SubDepartmentDto) {
    return this.subDepartmentRepository.save({
      ...dto,
      createdAt: new Date(),
    });
  }

  async getSubDepartments(departmentId: number) {
    return this.subDepartmentRepository.find({
      where: { departmentId: departmentId },
      order: {
        createdAt: 'desc',
      },
    });
  }

  async updateSubDepartment(id: number, name: string) {
    return this.subDepartmentRepository.update(id, {
      name: name,
      updatedAt: new Date(),
    });
  }

  async deleteSubDepartment(id: number) {
    return this.subDepartmentRepository.delete(id);
  }
}
