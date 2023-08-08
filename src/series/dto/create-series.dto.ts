import { ApiProperty } from '@nestjs/swagger';

export class CreateSeriesDto {
  @ApiProperty({
    example: 'Клан Сопрано',
    description: 'Series translated title',
  })
  translatedTitle: string;

  @ApiProperty({
    example: 'The Sopranos',
    description: 'Series original title',
  })
  originalTitle: string;

  @ApiProperty({ example: ['USA, Italy'], description: 'Series countries' })
  country: string[];

  @ApiProperty({ example: 1997, description: 'Series release year' })
  year: number;

  @ApiProperty({ example: 6, description: 'Count of series seasons' })
  seasonsCount: number;

  @ApiProperty({
    example: ['Timothy Van Patten'],
    description: 'Series directors',
  })
  director: string[];

  @ApiProperty({
    example: ['James Gandolfini', 'Edie Falco'],
    description: 'Series actors',
  })
  actors: string[];

  @ApiProperty({
    example: ['Matthew Weiner'],
    description: 'Series screenwriters',
  })
  screenwriters?: string[];

  @ApiProperty({
    example: ['Martin Bruestle'],
    description: 'Series producers',
  })
  producers?: string[];

  @ApiProperty({
    example: 16,
    description: 'Series age restriction',
  })
  ageRestriction?: number;

  @ApiProperty({
    example: 46,
    description: 'Episode average duration (minutes)',
  })
  duration: number;

  @ApiProperty({
    example: '/cover.jpg',
    description: 'Path to series cover image',
  })
  coverImage: string;

  @ApiProperty({
    example: 'https://www.youtube.com/watch?v=KMx4iFcozK0',
    description: 'Link to series trailer',
  })
  trailer?: string;

  @ApiProperty({ example: 10, description: 'Series rating (1-10)' })
  rating: number;

  @ApiProperty({ example: ['drama', 'criminal'], description: 'Series genres' })
  genres: string[];
}
