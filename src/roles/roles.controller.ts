import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';

@Controller('roles')
export class RolesController {
  constructor(private rolesService: RolesService) {}

  @Post()
  create(@Body() dto: CreateRoleDto) {
    return this.rolesService.create(dto);
  }

  @Get()
  getAll() {
    return this.rolesService.getAllRoles();
  }

  @Get('/:value')
  getByValue(@Param('value') value: string) {
    return this.rolesService.getRoleByValue(value);
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.rolesService.deleteRoleById(id);
  }
}
