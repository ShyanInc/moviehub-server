import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsString } from 'class-validator';

export class CreateSeriesDto {
  @ApiProperty({
    example: 'Клан Сопрано',
    description: 'Series translated title',
  })
  @IsString({ message: 'Have to be a string' })
  translatedTitle: string;

  @ApiProperty({
    example: 'The Sopranos',
    description: 'Series original title',
  })
  @IsString({ message: 'Have to be a string' })
  originalTitle: string;

  @ApiProperty({ example: ['USA, Italy'], description: 'Series countries' })
  @IsArray({ message: 'Have to be an array of strings' })
  country: string[];

  @ApiProperty({ example: 1997, description: 'Series release year' })
  @IsNumber({}, { message: 'Have to be a number' })
  year: number;

  @ApiProperty({ example: 6, description: 'Count of series seasons' })
  @IsNumber({}, { message: 'Have to be a number' })
  seasonsCount: number;

  @ApiProperty({
    example: ['Timothy Van Patten'],
    description: 'Series directors',
  })
  @IsArray({ message: 'Have to be an array of strings' })
  director: string[];

  @ApiProperty({
    example: ['James Gandolfini', 'Edie Falco'],
    description: 'Series actors',
  })
  @IsArray({ message: 'Have to be an array of strings' })
  actors: string[];

  @ApiProperty({
    example: ['Matthew Weiner'],
    description: 'Series screenwriters',
  })
  @IsArray({ message: 'Have to be an array of strings' })
  screenwriters?: string[];

  @ApiProperty({
    example: ['Martin Bruestle'],
    description: 'Series producers',
  })
  @IsArray({ message: 'Have to be an array of strings' })
  producers?: string[];

  @ApiProperty({
    example: 16,
    description: 'Series age restriction',
  })
  @IsNumber({}, { message: 'Have to be a number' })
  ageRestriction?: number;

  @ApiProperty({
    example: 46,
    description: 'Episode average duration (minutes)',
  })
  @IsNumber({}, { message: 'Have to be a number' })
  duration: number;

  @ApiProperty({
    example: '/cover.jpg',
    description: 'Path to series cover image',
  })
  @IsString({ message: 'Have to be a string' })
  coverImage: string;

  @ApiProperty({
    example: 'https://www.youtube.com/watch?v=KMx4iFcozK0',
    description: 'Link to series trailer',
  })
  @IsString({ message: 'Have to be a string' })
  trailer?: string;

  @ApiProperty({ example: 10, description: 'Series rating (1-10)' })
  @IsNumber({}, { message: 'Have to be a number' })
  rating: number;

  @ApiProperty({ example: ['drama', 'criminal'], description: 'Series genres' })
  @IsArray({ message: 'Have to be an array of strings' })
  genres: string[];
}
