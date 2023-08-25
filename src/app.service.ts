import { Injectable } from '@nestjs/common';
import { RolesService } from './roles/roles.service';
import { CreateRoleDto } from './roles/dto/create-role.dto';

const initialRoles: CreateRoleDto[] = [
  { value: 'user', description: 'User role' },
  { value: 'admin', description: 'Administrator role' },
];

@Injectable()
export class AppService {
  constructor(private rolesService: RolesService) {}

  initializeRoles() {
    initialRoles.forEach(async (role) => {
      try {
        await this.rolesService.getRoleByValue(role.value);
      } catch (e) {
        if (e.status === 404) {
          await this.rolesService.create(role);
        }
      }
    });
  }
}
