import { ApiProperty } from '@nestjs/swagger';

export class AddRoleDto {
  @ApiProperty({ example: 1, description: 'User ID' })
  userId: number;
  @ApiProperty({ example: 'User', description: 'Role value' })
  value: string;
}
