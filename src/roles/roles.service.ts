import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from './roles.model';
import { CreateRoleDto } from './dto/create-role.dto';

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role) private roleRepository: typeof Role) {}

  async getAllRoles() {
    return await this.roleRepository.findAll();
  }

  async getRoleByValue(value: string) {
    return await this.roleRepository.findOne({ where: { value } });
  }

  async create(dto: CreateRoleDto) {
    return await this.roleRepository.create(dto);
  }

  async deleteRoleById(id: number) {
    const role = await this.roleRepository.findByPk(id);
    return await role.destroy();
  }
}
