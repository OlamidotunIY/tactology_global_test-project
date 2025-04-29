import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPO')
    private userRepository: Repository<User>,
  ) {}

  async updateProfile(userId: number, username: string): Promise<User> {
    // Perform the update
    await this.userRepository.update(userId, { username });

    // Fetch and return the updated user
    return this.userRepository.findOneOrFail({
      where: { id: userId },
    });
  }

  async getUser(userId: number) {
    return this.userRepository.findOneBy({
      id: userId,
    });
  }
}
