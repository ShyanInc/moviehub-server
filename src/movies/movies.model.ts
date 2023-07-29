import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { Genre } from '../genres/genres.model';
import { MovieGenres } from '../genres/movie-genres.model';

interface MovieCreationAttrs {
  translatedTitle: string;
  originalTitle: string;
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

  @Column({ type: DataType.INTEGER, allowNull: false })
  year: number;

  @BelongsToMany(() => Genre, () => MovieGenres)
  genre: Genre[];

  @Column({ type: DataType.ARRAY(DataType.STRING), allowNull: false })
  director: string[];

  @Column({ type: DataType.ARRAY(DataType.STRING), allowNull: false })
  actors: string[];

  @Column({ type: DataType.ARRAY(DataType.STRING) })
  screenwriters?: string[];

  @Column({ type: DataType.ARRAY(DataType.STRING) })
  producers?: string[];

  @Column({ type: DataType.INTEGER })
  budget?: number;

  @Column({ type: DataType.INTEGER })
  ageRestriction?: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  duration: number;

  @Column({ type: DataType.STRING, allowNull: false })
  coverImage: string;

  @Column({ type: DataType.STRING })
  trailer?: string;

  @Column({ type: DataType.INTEGER })
  rating: number;
}
