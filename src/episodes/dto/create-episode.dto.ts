import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNumber, IsString } from 'class-validator';

export class CreateEpisodeDto {
  @ApiProperty({ example: 1, description: 'Series id' })
  seriesId: number;

  @ApiProperty({
    example: 1,
    description: 'The number of the season to which the episode belongs',
  })
  @IsNumber({}, { message: 'Have to be a number' })
  season: number;

  @ApiProperty({ example: 1, description: 'The number of the episode' })
  @IsNumber({}, { message: 'Have to be a number' })
  episode: number;

  @ApiProperty({
    example: 'Пилот',
    description: 'The translated title of the episode',
  })
  @IsString({ message: 'Have to be a string' })
  translatedTitle: string;

  @ApiProperty({
    example: 'Pilot',
    description: 'The original title of the episode',
  })
  @IsString({ message: 'Have to be a string' })
  originalTitle: string;

  @ApiProperty({
    example: '2015-03-25T12:00:00-06:30',
    description: 'Release date of the episode',
  })
  @IsDateString({}, { message: 'Have to be a date' })
  releaseDate: Date;
}
