import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClientEntity } from '../../domain/user';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(ClientEntity)
    private readonly userRepository: Repository<ClientEntity>,
  ) {}

  public async create(user: ClientEntity): Promise<ClientEntity> {
    return this.userRepository.save(user);
  }

  /*public async findByEmail(email: string) {
    return await this.userRepository.findOne({
      email: email,
    });
  }*/

  public async findAll() {
    return this.userRepository.find();
  }
}
