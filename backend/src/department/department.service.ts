import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma.services';
import { SubDepartmentDto } from 'src/sub-department/dto';

@Injectable()
export class DepartmentService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  async getDepartment(id: string) {
    return this.prisma.department.findUnique({
      where: { id: parseInt(id) },
    });
  }

  async createDepartment(
    name: string,
    userId: number,
    subDepartment?: [SubDepartmentDto],
  ) {
    const existingDepartment = await this.prisma.department.findFirst({
      where: { name },
    });
    if (existingDepartment) {
      throw new BadRequestException('Department already exists');
    }
    return this.prisma.department.create({
      data: {
        name,
        user: { connect: { id: userId } },
        subDepartments: subDepartment?.length
          ? { create: subDepartment }
          : undefined,
      },
    });
  }

  async getDepartments(userId: number) {
    return this.prisma.department.findMany({
      where: { userId: userId },
      include: {
        subDepartments: {
          orderBy: {
            createdAt: 'desc',
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async updateDepartment(id: string, name: string) {
    return this.prisma.department.update({
      where: { id: parseInt(id) },
      data: { name },
    });
  }

  async deleteDepartment(id: string) {
    return this.prisma.department.delete({
      where: { id: parseInt(id) },
    });
  }
}
