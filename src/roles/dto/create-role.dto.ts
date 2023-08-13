import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateRoleDto {
  @ApiProperty({ example: 'User', description: 'Role value' })
  @IsString({ message: 'Have to be a string' })
  value: string;

  @ApiProperty({ example: 'User role', description: 'Role description' })
  @IsString({ message: 'Have to be a string' })
  description: string;
}
