import { ApiProperty } from '@nestjs/swagger';

export class BanUserDto {
  @ApiProperty({ example: 1, description: 'User ID' })
  userId: number;
  @ApiProperty({ example: 'Aggression', description: 'Ban reason' })
  banReason: string;
}
