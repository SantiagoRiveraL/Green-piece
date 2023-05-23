import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../dao/user';
import { ClientEntity } from '../../domain/user';
import { UserDto } from '../../shared/dtos';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  public async create(user: UserDto): Promise<ClientEntity> {
    return this.userRepository.create(<ClientEntity>user);
  }

  /*public async findByEmail(email: string) {
    return this.userRepository.findByEmail(email);
  }*/

  public async findAll() {
    return this.userRepository.findAll();
  }
}
