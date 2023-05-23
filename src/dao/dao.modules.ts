import { Module } from '@nestjs/common';
import { DomainModule } from '../domain';
import { TypeOrmModule } from '@nestjs/typeorm';
import { environment } from '../environment';
import * as userRepositories from './user';

import * as userEntities from '../domain/user';

import { SharedModule } from '../shared/shared.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      database: environment.mysql.database,
      entities: [...Object.values(userEntities)],
      host: environment.mysql.host,
      password: environment.mysql.password,
      port: environment.mysql.port,
      synchronize: true,
      type: 'mysql',
      username: environment.mysql.username,
    }),
    DomainModule,
    SharedModule,
  ],
  providers: [...Object.values(userRepositories)],
  exports: [...Object.values(userRepositories)],
})
export class DaoModule {}
