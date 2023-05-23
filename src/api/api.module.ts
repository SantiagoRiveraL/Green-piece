import { Module } from '@nestjs/common';
import * as userControllers from './user';

import { DaoModule } from '../dao';
import { SharedModule } from '../shared/shared.module';
import { ServiceModule } from '../service';

@Module({
  controllers: [...Object.values(userControllers)],
  imports: [DaoModule, ServiceModule, SharedModule],
})
export class ApiModule {}
