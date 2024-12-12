import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma.services';

@Injectable()
export class SubDepartmentService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async getSubDepartment(id: string) {
    return this.prisma.subDepartment.findUnique({
      where: { id: parseInt(id) },
    });
  }

  async createSubDepartment(name: string, department: number) {
    return this.prisma.subDepartment.create({
      data: {
        name,
        department: { connect: { id: department } },
      },
    });
  }

  async getSubDepartments(departmentId: number) {
    return this.prisma.subDepartment.findMany({
      where: { departmentId: departmentId },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async updateSubDepartment(id: string, name: string) {
    return this.prisma.subDepartment.update({
      where: { id: parseInt(id) },
      data: { name },
    });
  }

  async deleteSubDepartment(id: string) {
    return this.prisma.subDepartment.delete({
      where: { id: parseInt(id) },
    });
  }
}
