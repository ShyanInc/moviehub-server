import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class RemoveRoleDto {
  @ApiProperty({ example: 1, description: 'Unique identification' })
  @IsNumber({}, { message: 'Have to be a number' })
  userId: number;

  @ApiProperty({ example: 'ADMIN', description: 'Role value' })
  @IsString({ message: 'Have to be a string' })
  value: string;
}
