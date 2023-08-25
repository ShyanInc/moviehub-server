import { Injectable } from '@nestjs/common';
import { CreateUserInfoDto } from './dto/create-user-info.dto';
import { InjectModel } from '@nestjs/sequelize';
import { UserInfo } from './users-info.model';

@Injectable()
export class UsersInfoService {
  constructor(
    @InjectModel(UserInfo) private userInfoRepository: typeof UserInfo,
  ) {}

  async create(dto: CreateUserInfoDto) {
    const userInfo = await this.userInfoRepository.create(dto);
    return userInfo;
  }
}
