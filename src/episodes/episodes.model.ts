import {
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Series } from '../series/series.model';
import { SeriesEpisodes } from './series-episodes.model';
import { ApiProperty } from '@nestjs/swagger';

interface EpisodeCreationAttrs {
  season: number;
  episode: number;
  translatedTitle: string;
  originalTitle: string;
  releaseDate: Date;
}

@Table({ tableName: 'episodes', createdAt: false, updatedAt: false })
export class Episode extends Model<Episode, EpisodeCreationAttrs> {
  @ApiProperty({ example: 1, description: 'Unique identification' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 1, description: 'Series id' })
  @ForeignKey(() => Series)
  @Column({ type: DataType.INTEGER })
  seriesId: number;

  @ApiProperty({
    example: 1,
    description: 'The number of the season to which the episode belongs',
  })
  @Column({ type: DataType.INTEGER, allowNull: false })
  season: number;

  @ApiProperty({ example: 1, description: 'The number of the episode' })
  @Column({ type: DataType.INTEGER, allowNull: false })
  episode: number;

  @ApiProperty({
    example: 'Пилот',
    description: 'The translated title of the episode',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  translatedTitle: string;

  @ApiProperty({
    example: 'Pilot',
    description: 'The original title of the episode',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  originalTitle: string;

  @ApiProperty({
    example: '2015-03-25T12:00:00-06:30',
    description: 'Release date of the episode',
  })
  @Column({ type: DataType.DATE, allowNull: false })
  releaseDate: Date;

  @BelongsToMany(() => Series, () => SeriesEpisodes)
  series: Series;
}
