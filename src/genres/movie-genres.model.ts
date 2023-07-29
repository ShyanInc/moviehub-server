import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Movie } from '../movies/movies.model';
import { Genre } from './genres.model';

@Table({ tableName: 'movie_genres', createdAt: false, updatedAt: false })
export class MovieGenres extends Model<MovieGenres> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Genre)
  @Column({
    type: DataType.INTEGER,
  })
  genreId: number;

  @ForeignKey(() => Movie)
  @Column({
    type: DataType.INTEGER,
  })
  movieId: number;
}
