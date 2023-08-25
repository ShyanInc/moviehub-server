import { Module } from '@nestjs/common';
import { UsersInfoController } from './users-info.controller';
import { UsersInfoService } from './users-info.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserInfo } from './users-info.model';

@Module({
  imports: [SequelizeModule.forFeature([UserInfo])],
  controllers: [UsersInfoController],
  providers: [UsersInfoService],
  exports: [UsersInfoService],
})
export class UsersInfoModule {}
