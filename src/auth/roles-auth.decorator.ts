import { SetMetadata } from '@nestjs/common';

export const ROLES_KEY = 'roles';
export const ADMIN_ROLE = 'admin';

export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);
