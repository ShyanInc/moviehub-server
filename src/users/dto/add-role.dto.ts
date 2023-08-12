import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class AddRoleDto {
  @ApiProperty({ example: 1, description: 'User ID' })
  @IsNumber({}, { message: 'Have to be number' })
  userId: number;
  @ApiProperty({ example: 'User', description: 'Role value' })
  @IsString({ message: 'Have to be string' })
  value: string;
}
