import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { Department } from './department.entity';
import { Repository } from 'typeorm';
import { DepartmentDto } from './dto';

@Injectable()
export class DepartmentService {
  constructor(
    @Inject('DEPARTMENT_REPO')
    private readonly departmentRepository: Repository<Department>, // Replace with actual type
  ) {}

  async getDepartment(id: string) {
    return this.departmentRepository.findOneBy({ id: parseInt(id) });
  }

  async createDepartment(userId: number, dto: DepartmentDto) {
    const existingDepartment = await this.departmentRepository.findOne({
      where: { name: dto.name, userId },
    });

    if (existingDepartment) {
      throw new BadRequestException('Department already exists');
    }
    const department = this.departmentRepository.create({
      ...dto,
      userId,
      createdAt: new Date(),
      subDepartments: dto.subDepartment,
    });

    return await this.departmentRepository.save(department);
  }

  async getDepartments(userId: number, page: number, limit: number) {
    const [data, total] = await this.departmentRepository.findAndCount({
      where: { userId },
      relations: ['subDepartments'],
      order: {
        createdAt: 'asc',
      },
      skip: (page - 1) * limit,
      take: limit,
    });

    return {
      data,
      total,
      page,
      lastPage: Math.ceil(total / limit),
    };
  }

  async updateDepartment(id: string, name: string) {
    const department = await this.departmentRepository.findOne({
      where: { id: parseInt(id) },
    });

    if (!department) {
      throw new Error('Department not found');
    }

    department.name = name;
    await this.departmentRepository.save(department);

    return department;
  }

  async deleteDepartment(id: string) {
    return this.departmentRepository.delete(id);
  }
}
