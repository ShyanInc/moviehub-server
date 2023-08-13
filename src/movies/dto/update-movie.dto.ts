import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsString } from 'class-validator';

export class UpdateMovieDto {
  @ApiProperty({ example: 'Авиатор', description: 'Translated movie title' })
  @IsString({ message: 'Have to be a string' })
  translatedTitle: string;

  @ApiProperty({ example: 'The Aviator', description: 'Original movie title' })
  @IsString({ message: 'Have to be a string' })
  originalTitle: string;

  @ApiProperty({
    example: ['United States', 'France'],
    description: 'Movie countries',
  })
  @IsArray({ message: 'Have to be an array of strings' })
  country: string[];

  @ApiProperty({ example: 2004, description: 'Movie release year' })
  @IsNumber({}, { message: 'Have to be a number' })
  year: number;

  @ApiProperty({ example: ['Drama'], description: 'Movie genres' })
  @IsArray({ message: 'Have to be an array of strings' })
  genre: string[];

  @ApiProperty({ example: ['Martin Scorsese'], description: 'Movie directors' })
  @IsArray({ message: 'Have to be an array of strings' })
  director: string[];

  @ApiProperty({
    example: ['Leonardo DiCaprio', 'Cate Blanchett'],
    description: 'Movie actors',
  })
  @IsArray({ message: 'Have to be an array of strings' })
  actors: string[];

  @ApiProperty({ example: ['John Logan'], description: 'Movie screenwriters' })
  @IsArray({ message: 'Have to be an array of strings' })
  screenwriters?: string[];

  @ApiProperty({
    example: ['Charles Evans Jr.', 'Graham King'],
    description: 'Movie producers',
  })
  @IsArray({ message: 'Have to be an array of strings' })
  producers?: string[];

  @ApiProperty({ example: 25000000, description: 'Movie budget (usd)' })
  @IsNumber({}, { message: 'Have to be a number' })
  budget?: number;

  @ApiProperty({ example: 18, description: 'Movie age restriction' })
  @IsNumber({}, { message: 'Have to be a number' })
  ageRestriction?: number;

  @ApiProperty({ example: 180, description: 'Movie duration (minutes)' })
  @IsNumber({}, { message: 'Have to be a number' })
  duration: number;

  @ApiProperty({
    example: 'https://www.youtube.com/watch?v=FebPJlmgldE',
    description: 'Link to movie trailer',
  })
  @IsString({ message: 'Have to be a string' })
  trailer?: string;
}
