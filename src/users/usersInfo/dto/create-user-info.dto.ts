import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateUserInfoDto {
  @ApiProperty({ example: 1, description: 'Unique identification' })
  @IsNumber({}, { message: 'Have to be a number' })
  id: number;

  @ApiProperty({ example: 'John', description: 'Name of the user' })
  @IsString({ message: 'Have to be a string' })
  name: string;

  @ApiProperty({ example: 'Silver', description: 'Surname of the user' })
  @IsOptional()
  @IsString({ message: 'Have to be a string' })
  surname?: string;

  @ApiProperty({
    example: 'This is some status',
    description: 'Status of the user',
  })
  @IsOptional()
  @IsString({ message: 'Have to be a string' })
  status?: string;

  @ApiProperty({
    example: '1997-03-25',
    description: 'Birth date of the user',
  })
  @IsDate()
  birthDate: Date;
}
