import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { UnauthorizedException } from '@nestjs/common/exceptions';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { User } from 'src/users/users.model';
import { LoginDto } from './dto/login.dto';
import { UsersInfoService } from '../users/usersInfo/users-info.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private userInfoService: UsersInfoService,
    private jwtService: JwtService,
  ) {}

  async login(dto: LoginDto) {
    const user = await this.validateUser(dto);
    const userInfo = await this.userInfoService.getById(user.id);
    const { accessToken } = this.generateToken(user);
    return {
      username: user.username,
      name: userInfo.name,
      surname: userInfo.surname,
      status: userInfo.status,
      birthDate: userInfo.birthDate,
      accessToken: accessToken,
    };
  }

  async register(dto: CreateUserDto) {
    const candidate = await this.userService.getUserByEmail(dto.email);
    if (candidate) {
      throw new HttpException(
        'User with this email already exists',
        HttpStatus.BAD_REQUEST,
      );
    }

    const hashPassword = await bcrypt.hash(dto.password, 5);
    const user = await this.userService.createUser({
      ...dto,
      password: hashPassword,
    });

    const userInfo = await this.userInfoService.getById(user.id);
    const { accessToken } = this.generateToken(user);

    return {
      username: user.username,
      name: userInfo.name,
      surname: userInfo.surname,
      status: userInfo.status,
      birthDate: userInfo.birthDate,
      accessToken: accessToken,
    };
  }

  private generateToken(user: User) {
    const payload = {
      id: user.id,
      username: user.username,
      email: user.email,
      roles: user.roles,
    };
    return {
      accessToken: this.jwtService.sign(payload, {
        secret: process.env.JWT_SECRET,
      }),
    };
  }

  private async validateUser(dto: LoginDto) {
    const user = await this.userService.getUserByUsername(dto.username);
    if (!user) {
      throw new UnauthorizedException({ message: 'Invalid credentials' });
    }
    const passwordEquals = await bcrypt.compare(dto.password, user.password);
    if (passwordEquals) {
      return user;
    }
    throw new UnauthorizedException({ message: 'Invalid credentials' });
  }
}
