import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as usersEntities from './user';
@Module({
  exports: [TypeOrmModule.forFeature([...Object.values(usersEntities)])],
  imports: [TypeOrmModule.forFeature([...Object.values(usersEntities)])],
})
export class DomainModule {}
