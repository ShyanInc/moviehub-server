import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from '../users.model';
import { Movie } from '../../movies/movies.model';

@Table({ tableName: 'user_movies', createdAt: false, updatedAt: false })
export class UserMovies extends Model<UserMovies> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @ForeignKey(() => Movie)
  @Column({ type: DataType.INTEGER })
  movieId: number;

  @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
  planned: boolean;

  @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
  watched: boolean;

  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  rating: number;
}
