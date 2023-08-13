import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class UnbanUserDto {
  @ApiProperty({ example: 1, description: 'User ID' })
  @IsNumber({}, { message: 'Have to be a number' })
  userId: number;
}
