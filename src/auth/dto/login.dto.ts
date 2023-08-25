import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    example: 'pass123',
    description: 'Username of the user account',
  })
  @IsString({ message: 'Have to be a string' })
  @Length(3, 18, {
    message: 'Username min length is 4 and max is 18 characters',
  })
  username: string;

  @ApiProperty({
    example: 'pass123',
    description: 'Password of the user account',
  })
  @IsString({ message: 'Have to be a string' })
  @Length(4, 32, {
    message: 'Password min length is 4 and max is 32 characters',
  })
  password: string;
}
