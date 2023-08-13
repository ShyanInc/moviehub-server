import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNumber, IsString, Length } from 'class-validator';

export class UpdateUserEmailDto {
  @ApiProperty({ example: 1, description: 'User ID' })
  @IsNumber({}, { message: 'Have to be a number' })
  userId: number;

  @ApiProperty({ example: 'email@gmail.com', description: 'Email to be set' })
  @IsString({ message: 'Have to be a string' })
  @IsEmail({}, { message: 'Invalid email' })
  email: string;
}

export class UpdateUserPasswordDto {
  @ApiProperty({ example: 1, description: 'User ID' })
  @IsNumber({}, { message: 'Have to be a number' })
  userId: number;

  @ApiProperty({ example: 'pass123', description: 'Password to be set' })
  @IsString({ message: 'Have to be a string' })
  @Length(4, 32, {
    message: 'Password min length is 4 and max is 32 characters',
  })
  password: string;
}
