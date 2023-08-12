import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'email@gmail.com',
    description: 'New user email address',
  })
  @IsString({ message: 'Have to be string' })
  @IsEmail({}, { message: 'Invalid email' })
  email: string;
  @ApiProperty({ example: 'pass123', description: 'New user password' })
  @IsString({ message: 'Have to be string' })
  @Length(4, 32, {
    message: 'Password min length is 4 and max is 32 characters',
  })
  password: string;
}
