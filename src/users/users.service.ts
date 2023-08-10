import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import { CreateUserDto } from './dto/create-user.dto';
import { RolesService } from '../roles/roles.service';
import { AddRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.dto';
import { UnbanUserDto } from './dto/unban-user.dto';
import {
  UpdateUserEmailDto,
  UpdateUserPasswordDto,
} from './dto/update-user.dto';
import { RemoveRoleDto } from './dto/remove-role.dto';
import { Role } from 'src/roles/roles.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    private rolesService: RolesService,
  ) {}

  async getAllUsers() {
    return await this.userRepository.findAll({ include: [Role] });
  }

  async getUserById(id: number) {
    const user = await this.userRepository.findByPk(id, { include: [Role] });
    if (!user) {
      throw new HttpException('User not found!', HttpStatus.NOT_FOUND);
    }

    return user;
  }

  async createUser(dto: CreateUserDto) {
    const candidate = await this.userRepository.findOne({
      where: { email: dto.email },
    });
    if (candidate) {
      throw new HttpException(
        'User with this email already exists',
        HttpStatus.BAD_REQUEST,
      );
    }

    const user = await this.userRepository.create(dto);
    const role = await this.rolesService.getRoleByValue('USER');

    await user.$set('roles', [role.id]);
    user.roles = [role];

    return user;
  }

  async addRole(dto: AddRoleDto) {
    const user = await this.userRepository.findByPk(dto.userId);
    const role = await this.rolesService.getRoleByValue(dto.value);
    if (user && role) {
      await user.$add('roles', role.id);
      return dto;
    }
    throw new HttpException('User or role not found', HttpStatus.NOT_FOUND);
  }

  async removeRole(dto: RemoveRoleDto) {
    const user = await this.userRepository.findByPk(dto.userId);
    const role = await this.rolesService.getRoleByValue(dto.value);
    if (user && role) {
      await user.$remove('roles', role.id);
      return dto;
    }

    throw new HttpException('User or role not found', HttpStatus.NOT_FOUND);
  }

  async ban(dto: BanUserDto) {
    const user = await this.userRepository.findByPk(dto.userId);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    user.banned = true;
    user.banReason = dto.banReason;
    await user.save();
    return user;
  }

  async unban(dto: UnbanUserDto) {
    const user = await this.userRepository.findByPk(dto.userId);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    user.banned = false;
    user.banReason = '';
    await user.save();
    return user;
  }

  async updateUserEmailById(dto: UpdateUserEmailDto) {
    const user = await this.userRepository.findByPk(dto.userId);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    const candidate = await this.userRepository.findOne({
      where: { email: dto.email },
    });
    if (candidate) {
      throw new HttpException(
        'Email already registered',
        HttpStatus.BAD_REQUEST,
      );
    }
    user.email = dto.email;
    await user.save();
    return user;
  }

  async updateUserPasswordById(dto: UpdateUserPasswordDto) {
    const user = await this.userRepository.findByPk(dto.userId);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    user.password = dto.password;
    await user.save();
    return user;
  }

  async deleteUserById(id: string) {
    const user = await this.userRepository.findByPk(+id);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return await user.destroy();
  }
}
