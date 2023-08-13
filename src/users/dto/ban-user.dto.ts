import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class BanUserDto {
  @ApiProperty({ example: 1, description: 'User ID' })
  @IsNumber({}, { message: 'Have to be a number' })
  userId: number;

  @ApiProperty({ example: 'Aggression', description: 'Ban reason' })
  @IsString({ message: 'Have to be a string' })
  banReason: string;
}
