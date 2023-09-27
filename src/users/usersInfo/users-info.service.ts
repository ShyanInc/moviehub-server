import { Injectable, NotFoundException } from '@nestjs/common';
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

  async getAll() {
    const usersInfo = await this.userInfoRepository.findAll();
    return usersInfo;
  }

  async getById(id: number) {
    const userInfo = await this.userInfoRepository.findOne({
      where: { userId: id },
    });
    if (!userInfo) {
      throw new NotFoundException();
    }
    return userInfo;
  }
}
