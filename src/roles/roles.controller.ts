import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Role } from './roles.model';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles-auth.decorator';

@ApiTags('Roles')
@Controller('roles')
export class RolesController {
  constructor(private rolesService: RolesService) {}

  @ApiOperation({ summary: 'Create role' })
  @ApiResponse({ status: 201, type: Role })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Post()
  create(@Body() dto: CreateRoleDto) {
    return this.rolesService.create(dto);
  }

  @ApiOperation({ summary: 'Get all roles' })
  @ApiResponse({ status: 200, type: [Role] })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.rolesService.getAllRoles();
  }

  @ApiOperation({ summary: 'Get role by value' })
  @ApiResponse({ status: 200, type: Role })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Get('/:value')
  getByValue(@Param('value') value: string) {
    return this.rolesService.getRoleByValue(value);
  }

  @ApiOperation({ summary: 'Delete role by id' })
  @ApiResponse({ status: 204 })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.rolesService.deleteRoleById(id);
  }
}
