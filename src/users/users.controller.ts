import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiOperation,
  ApiProperty,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ADMIN_ROLE, Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { AddRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UnbanUserDto } from './dto/unban-user.dto';
import {
  UpdateUserEmailDto,
  UpdateUserPasswordDto,
} from './dto/update-user.dto';
import { User } from './users.model';
import { UsersService } from './users.service';
import { UsersInfoService } from './usersInfo/users-info.service';
import { UserInfo } from './usersInfo/users-info.model';
import { CreateUserInfoDto } from './usersInfo/dto/create-user-info.dto';

class BannedUser {
  @ApiProperty({ example: 1, description: '' })
  id: number;
  @ApiProperty({ example: 'email@gmail.com', description: 'User email' })
  email: string;
  @ApiProperty({ example: 'pass123', description: 'User password' })
  password: 'pass123';
  @ApiProperty({ example: 'true', description: 'Is banned' })
  banned: boolean;
  @ApiProperty({ example: 'Aggression', description: 'Ban reason' })
  banReason: string;
}

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(
    private usersService: UsersService,
    private usersInfoService: UsersInfoService,
  ) {}

  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({ status: 201, type: User })
  @Roles(ADMIN_ROLE)
  @UseGuards(RolesGuard)
  @Post()
  create(@Body() dto: CreateUserDto) {
    return this.usersService.createUser(dto);
  }

  @ApiOperation({ summary: 'Add role to user' })
  @ApiResponse({ status: 200, type: AddRoleDto })
  @Roles(ADMIN_ROLE)
  @UseGuards(RolesGuard)
  @Post('/role')
  addRole(@Body() dto: AddRoleDto) {
    return this.usersService.addRole(dto);
  }

  @ApiOperation({ summary: 'Add user info' })
  @ApiResponse({ status: 200, type: UserInfo })
  @Post('/info')
  addInfo(@Body() dto: CreateUserInfoDto) {
    return this.usersInfoService.create(dto);
  }

  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, type: [User] })
  @Roles(ADMIN_ROLE)
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.usersService.getAllUsers();
  }

  @ApiOperation({ summary: 'Get user by id' })
  @ApiResponse({ status: 200, type: User })
  @Get('/:id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.getUserById(id);
  }

  // TODO: get all users info
  // @ApiOperation({ summary: 'Get users info' })
  // @ApiResponse({ status: 200, type: [UserInfo] })
  // @Roles(ADMIN_ROLE)
  // @UseGuards(RolesGuard)
  // @Get('/info')
  // getAllUsersInfo() {
  //   return this.usersInfoService.getAll();
  // }

  @ApiOperation({ summary: 'Get user info' })
  @ApiResponse({ status: 200, type: UserInfo })
  @Get('/info/:id')
  getInfoById(@Param('id', ParseIntPipe) id: number) {
    return this.usersInfoService.getById(id);
  }

  @ApiOperation({ summary: 'Ban user' })
  @ApiResponse({
    status: 200,
    type: BannedUser,
  })
  @Roles(ADMIN_ROLE)
  @UseGuards(RolesGuard)
  @Patch('/ban')
  ban(@Body() dto: BanUserDto) {
    return this.usersService.ban(dto);
  }

  @ApiOperation({ summary: 'Unban user' })
  @ApiResponse({ status: 200, type: User })
  @Roles(ADMIN_ROLE)
  @UseGuards(RolesGuard)
  @Patch('/unban')
  unban(@Body() dto: UnbanUserDto) {
    return this.usersService.unban(dto);
  }

  @ApiOperation({ summary: 'Change user email' })
  @ApiResponse({ status: 200, type: User })
  @Roles(ADMIN_ROLE)
  @UseGuards(RolesGuard)
  @Patch('/email')
  updateEmail(@Body() dto: UpdateUserEmailDto) {
    return this.usersService.updateUserEmailById(dto);
  }

  @ApiOperation({ summary: 'Change user password' })
  @ApiResponse({ status: 200, type: User })
  @Roles(ADMIN_ROLE)
  @UseGuards(RolesGuard)
  @Patch('/password')
  updatePassword(@Body() dto: UpdateUserPasswordDto) {
    return this.usersService.updateUserPasswordById(dto);
  }

  @ApiOperation({ summary: 'Delete user' })
  @ApiResponse({ status: 204 })
  @Roles(ADMIN_ROLE)
  @UseGuards(RolesGuard)
  @Delete('/:id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.deleteUserById(id);
  }
}
