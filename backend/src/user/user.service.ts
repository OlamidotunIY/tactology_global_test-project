import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.services';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async updateProfile(userId: number, fullname: string) {
    return await this.prisma.user.update({
      where: { id: userId },
      data: {
        fullname,
      },
    });
  }

  async getUser(userId: number) {
    return this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
  }
}
