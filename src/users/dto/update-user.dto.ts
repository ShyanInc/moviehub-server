import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserEmailDto {
  @ApiProperty({ example: 1, description: 'User ID' })
  userId: number;
  @ApiProperty({ example: 'email@gmail.com', description: 'Email to be set' })
  email: string;
}

export class UpdateUserPasswordDto {
  @ApiProperty({ example: 1, description: 'User ID' })
  userId: number;
  @ApiProperty({ example: 'pass123', description: 'Password to be set' })
  password: string;
}
