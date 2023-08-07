import { ApiProperty } from '@nestjs/swagger';

export class CreateMovieDto {
  @ApiProperty({ example: 'Авиатор', description: 'Translated movie title' })
  translatedTitle: string;
  @ApiProperty({ example: 'The Aviator', description: 'Original movie title' })
  originalTitle: string;
  @ApiProperty({
    example: ['United States', 'France'],
    description: 'Movie countries',
  })
  country: string[];
  @ApiProperty({ example: 2004, description: 'Movie release year' })
  year: number;
  @ApiProperty({ example: ['Martin Scorsese'], description: 'Movie directors' })
  director: string[];
  @ApiProperty({
    example: ['Leonardo DiCaprio', 'Cate Blanchett'],
    description: 'Movie actors',
  })
  actors: string[];
  @ApiProperty({ example: ['John Logan'], description: 'Movie screenwriters' })
  screenwriters?: string[];
  @ApiProperty({
    example: ['Charles Evans Jr.', 'Graham King'],
    description: 'Movie producers',
  })
  producers?: string[];
  @ApiProperty({ example: 25000000, description: 'Movie budget (usd)' })
  budget?: number;
  @ApiProperty({ example: 18, description: 'Movie age restriction' })
  ageRestriction?: number;
  @ApiProperty({ example: 180, description: 'Movie duration (minutes)' })
  duration: number;
  @ApiProperty({
    example: '/cover.jpg',
    description: 'Path to movie cover image',
  })
  coverImage: string;
  @ApiProperty({
    example: 'https://www.youtube.com/watch?v=FebPJlmgldE',
    description: 'Link to movie trailer',
  })
  trailer?: string;
  @ApiProperty({ example: 8, description: 'Movie rating (1-10)' })
  rating: number;
  @ApiProperty({ example: ['Drama'], description: 'Movie genres' })
  genres: string[];
}
