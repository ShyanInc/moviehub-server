import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateGenreDto {
  @ApiProperty({ example: 'drama', description: 'Genre value' })
  @IsString({ message: 'Have to be a string' })
  value: string;

  @ApiProperty({ example: 'Drama', description: 'Genre description' })
  @IsString({ message: 'Have to be a string' })
  description: string;
}
