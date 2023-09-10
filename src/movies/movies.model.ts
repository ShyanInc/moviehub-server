import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { Genre } from '../genres/genres.model';
import { MovieGenres } from '../genres/movie-genres.model';
import { ApiProperty } from '@nestjs/swagger';

interface MovieCreationAttrs {
  translatedTitle: string;
  originalTitle: string;
  country: string[];
  year: number;
  director: string[];
  actors: string[];
  screenwriters?: string[];
  producers?: string[];
  budget?: number;
  ageRestriction?: number;
  duration: number;
  coverImage: string;
  trailer?: string;
  rating: number;
}

@Table({ tableName: 'movies' })
export class Movie extends Model<Movie, MovieCreationAttrs> {
  @ApiProperty({ example: 1, description: 'Unique identification' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Авиатор', description: 'Translated movie title' })
  @Column({ type: DataType.STRING, allowNull: false })
  translatedTitle: string;

  @ApiProperty({ example: 'The Aviator', description: 'Original movie title' })
  @Column({ type: DataType.STRING, allowNull: false })
  originalTitle: string;

  @ApiProperty({
    example: ['United States', 'France'],
    description: 'Movie countries',
  })
  @Column({ type: DataType.ARRAY(DataType.STRING), allowNull: false })
  country: string[];

  @ApiProperty({ example: 2004, description: 'Movie release year' })
  @Column({ type: DataType.INTEGER, allowNull: false })
  year: number;

  @ApiProperty({ example: ['Drama'], description: 'Movie genres' })
  @BelongsToMany(() => Genre, () => MovieGenres)
  genres: Genre[];

  @ApiProperty({ example: ['Martin Scorsese'], description: 'Movie directors' })
  @Column({ type: DataType.ARRAY(DataType.STRING), allowNull: false })
  director: string[];

  @ApiProperty({
    example: ['Leonardo DiCaprio', 'Cate Blanchett'],
    description: 'Movie actors',
  })
  @Column({ type: DataType.ARRAY(DataType.STRING), allowNull: false })
  actors: string[];

  @ApiProperty({ example: ['John Logan'], description: 'Movie screenwriters' })
  @Column({ type: DataType.ARRAY(DataType.STRING) })
  screenwriters?: string[];

  @ApiProperty({
    example: ['Charles Evans Jr.', 'Graham King'],
    description: 'Movie producers',
  })
  @Column({ type: DataType.ARRAY(DataType.STRING) })
  producers?: string[];

  @ApiProperty({ example: 25000000, description: 'Movie budget (usd)' })
  @Column({ type: DataType.INTEGER })
  budget?: number;

  @ApiProperty({ example: 18, description: 'Movie age restriction' })
  @Column({ type: DataType.INTEGER })
  ageRestriction?: number;

  @ApiProperty({ example: 180, description: 'Movie duration (minutes)' })
  @Column({ type: DataType.INTEGER, allowNull: false })
  duration: number;

  @ApiProperty({
    example: '',
    description: 'Path to movie cover image ( empty by default )',
  })
  @Column({ type: DataType.STRING, defaultValue: '' })
  coverImage: string;

  @ApiProperty({
    example: 'https://www.youtube.com/watch?v=FebPJlmgldE',
    description: 'Link to movie trailer',
  })
  @Column({ type: DataType.STRING, defaultValue: '' })
  trailer?: string;

  @ApiProperty({ example: 8, description: 'Movie rating (1-10)' })
  @Column({ type: DataType.INTEGER })
  rating: number;

  @ApiProperty({
    example: 'some description',
    description: 'Movie short description',
  })
  @Column({ type: DataType.STRING, defaultValue: '' })
  description: string;
}
