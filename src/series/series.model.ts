import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { Genre } from '../genres/genres.model';
import { MovieGenres } from '../genres/movie-genres.model';
import { SeriesGenres } from '../genres/series-genres.model';

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
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  translatedTitle: string;

  @Column({ type: DataType.STRING, allowNull: false })
  originalTitle: string;

  @Column({ type: DataType.ARRAY(DataType.STRING), allowNull: false })
  country: string[];

  @Column({ type: DataType.INTEGER, allowNull: false })
  year: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  seasonsCount: number;

  @BelongsToMany(() => Genre, () => SeriesGenres)
  genres: Genre[];

  @Column({ type: DataType.ARRAY(DataType.STRING), allowNull: false })
  director: string[];

  @Column({ type: DataType.ARRAY(DataType.STRING), allowNull: false })
  actors: string[];

  @Column({ type: DataType.ARRAY(DataType.STRING) })
  screenwriters?: string[];

  @Column({ type: DataType.ARRAY(DataType.STRING) })
  producers?: string[];

  @Column({ type: DataType.INTEGER })
  ageRestriction?: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  episodeDuration: number;

  @Column({ type: DataType.STRING, allowNull: false })
  coverImage: string;

  @Column({ type: DataType.STRING })
  trailer?: string;

  @Column({ type: DataType.INTEGER })
  rating: number;
}
