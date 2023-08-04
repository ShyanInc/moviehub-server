import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'email@gmail.com',
    description: 'New user email address',
  })
  email: string;
  @ApiProperty({ example: 'pass123', description: 'New user password' })
  password: string;
}
