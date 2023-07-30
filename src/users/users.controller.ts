import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import {
  UpdateUserEmailDto,
  UpdateUserPasswordDto,
} from './dto/update-user.dto';
import { AddRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.dto';
import { UnbanUserDto } from './dto/unban-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  create(@Body() dto: CreateUserDto) {
    return this.usersService.createUser(dto);
  }

  @Post('/role')
  addRole(@Body() dto: AddRoleDto) {
    return this.usersService.addRole(dto);
  }

  @Get()
  getAll() {
    return this.usersService.getAllUsers();
  }

  @Patch('/ban')
  ban(@Body() dto: BanUserDto) {
    return this.usersService.ban(dto);
  }

  @Patch('/unban')
  unban(@Body() dto: UnbanUserDto) {
    return this.usersService.unban(dto);
  }

  @Patch('/email')
  updateEmail(@Body() dto: UpdateUserEmailDto) {
    return this.usersService.updateUserEmailById(dto);
  }

  @Patch('/password')
  updatePassword(@Body() dto: UpdateUserPasswordDto) {
    return this.usersService.updateUserPasswordById(dto);
  }

  @Delete('/:id')
  deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUserById(id);
  }
}
