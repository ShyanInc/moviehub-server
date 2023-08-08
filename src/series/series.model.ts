import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { Genre } from '../genres/genres.model';
import { SeriesGenres } from '../genres/series-genres.model';
import { ApiProperty } from '@nestjs/swagger';

interface SeriesCreationAttrs {
  translatedTitle: string;
  originalTitle: string;
  country: string[];
  year: number;
  seasonsCount: number;
  director: string[];
  actors: string[];
  screenwriters?: string[];
  producers?: string[];
  ageRestriction?: number;
  episodeDuration: number;
  coverImage: string;
  trailer?: string;
  rating: number;
}

@Table({ tableName: 'series' })
export class Series extends Model<Series, SeriesCreationAttrs> {
  @ApiProperty({ example: 1, description: 'Unique identification' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'Клан Сопрано',
    description: 'Series translated title',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  translatedTitle: string;

  @ApiProperty({
    example: 'The Sopranos',
    description: 'Series original title',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  originalTitle: string;

  @ApiProperty({ example: ['USA, Italy'], description: 'Series countries' })
  @Column({ type: DataType.ARRAY(DataType.STRING), allowNull: false })
  country: string[];

  @ApiProperty({ example: 1997, description: 'Series release year' })
  @Column({ type: DataType.INTEGER, allowNull: false })
  year: number;

  @ApiProperty({ example: 6, description: 'Count of series seasons' })
  @Column({ type: DataType.INTEGER, allowNull: false })
  seasonsCount: number;

  @ApiProperty({ example: ['drama', 'criminal'], description: 'Series genres' })
  @BelongsToMany(() => Genre, () => SeriesGenres)
  genres: Genre[];

  @ApiProperty({
    example: ['Timothy Van Patten'],
    description: 'Series directors',
  })
  @Column({ type: DataType.ARRAY(DataType.STRING), allowNull: false })
  director: string[];

  @ApiProperty({
    example: ['James Gandolfini', 'Edie Falco'],
    description: 'Series actors',
  })
  @Column({ type: DataType.ARRAY(DataType.STRING), allowNull: false })
  actors: string[];

  @ApiProperty({
    example: ['Matthew Weiner'],
    description: 'Series screenwriters',
  })
  @Column({ type: DataType.ARRAY(DataType.STRING) })
  screenwriters?: string[];

  @ApiProperty({
    example: ['Martin Bruestle'],
    description: 'Series producers',
  })
  @Column({ type: DataType.ARRAY(DataType.STRING) })
  producers?: string[];

  @ApiProperty({
    example: 16,
    description: 'Series age restriction',
  })
  @Column({ type: DataType.INTEGER })
  ageRestriction?: number;

  @ApiProperty({
    example: 46,
    description: 'Episode average duration (minutes)',
  })
  @Column({ type: DataType.INTEGER, allowNull: false })
  episodeDuration: number;

  @ApiProperty({
    example: '/cover.jpg',
    description: 'Path to series cover image',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  coverImage: string;

  @ApiProperty({
    example: 'https://www.youtube.com/watch?v=KMx4iFcozK0',
    description: 'Link to series trailer',
  })
  @Column({ type: DataType.STRING })
  trailer?: string;

  @ApiProperty({ example: 10, description: 'Series rating (1-10)' })
  @Column({ type: DataType.INTEGER })
  rating: number;
}
