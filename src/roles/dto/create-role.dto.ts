import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({ example: 'User', description: 'Role value' })
  value: string;
  @ApiProperty({ example: 'User role', description: 'Role description' })
  description: string;
}
