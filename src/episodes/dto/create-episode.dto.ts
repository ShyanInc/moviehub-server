import { ApiProperty } from '@nestjs/swagger';

export class CreateEpisodeDto {
  @ApiProperty({ example: 1, description: 'Series id' })
  seriesId: number;

  @ApiProperty({
    example: 1,
    description: 'The number of the season to which the episode belongs',
  })
  season: number;

  @ApiProperty({ example: 1, description: 'The number of the episode' })
  episode: number;

  @ApiProperty({
    example: 'Пилот',
    description: 'The translated title of the episode',
  })
  translatedTitle: string;

  @ApiProperty({
    example: 'Pilot',
    description: 'The original title of the episode',
  })
  originalTitle: string;

  @ApiProperty({
    example: '2015-03-25T12:00:00-06:30',
    description: 'Release date of the episode',
  })
  releaseDate: Date;
}
