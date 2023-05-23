import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdminEntity } from '../../domain/user';

@Injectable()
export class SupplierRepository {
  constructor(
    @InjectRepository(AdminEntity)
    private readonly supplierRepository: Repository<AdminEntity>,
  ) {}

  public async create(user: AdminEntity): Promise<AdminEntity> {
    return this.supplierRepository.save(user);
  }

  /*public async findById(id) {
    return this.supplierRepository.findOne({ id: id });
  }*/

  public async findAll() {
    return this.supplierRepository.find();
  }
}
