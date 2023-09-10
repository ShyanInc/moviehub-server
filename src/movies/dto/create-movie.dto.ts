import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, ValidateIf } from 'class-validator';

export class CreateMovieDto {
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
  @IsString({ message: 'Have to be an array of strings', each: true })
  country: string[];

  @ApiProperty({ example: 2004, description: 'Movie release year' })
  @IsNumber({}, { message: 'Have to be a number' })
  year: number;

  @ApiProperty({ example: ['Martin Scorsese'], description: 'Movie directors' })
  @IsString({ message: 'Have to be an array of strings', each: true })
  director: string[];

  @ApiProperty({
    example: ['Leonardo DiCaprio', 'Cate Blanchett'],
    description: 'Movie actors',
  })
  @IsString({ message: 'Have to be an array of strings', each: true })
  actors: string[];

  @ApiProperty({ example: ['John Logan'], description: 'Movie screenwriters' })
  @IsString({ message: 'Have to be an array of strings', each: true })
  screenwriters?: string[];

  @ApiProperty({
    example: ['Charles Evans Jr.', 'Graham King'],
    description: 'Movie producers',
  })
  @IsString({ message: 'Have to be an array of strings', each: true })
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
  @ValidateIf((value) => value.length > 0)
  @IsString({ message: 'Have to be a string' })
  trailer?: string;

  @ApiProperty({ example: 8, description: 'Movie rating (1-10)' })
  @IsNumber({}, { message: 'Have to be a number' })
  rating: number;

  @ApiProperty({
    example: 'some description',
    description: 'Movie short description',
  })
  @IsString({ message: 'Have to be a string' })
  description: string;

  @ApiProperty({ example: ['Drama'], description: 'Movie genres' })
  @IsString({ message: 'Have to be an array of strings', each: true })
  genres: string[];
}
