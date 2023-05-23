import { Module } from '@nestjs/common';
import * as userServices from './user';
import { DaoModule } from '../dao';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    DaoModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '7d' },
    }),
  ],
  exports: [...Object.values(userServices)],
  providers: [...Object.values(userServices)],
})
export class ServiceModule {}
