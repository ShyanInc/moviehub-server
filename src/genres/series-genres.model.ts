import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Genre } from './genres.model';
import { Series } from '../series/series.model';

@Table({ tableName: 'series_genres', createdAt: false, updatedAt: false })
export class SeriesGenres extends Model<SeriesGenres> {
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

  @ForeignKey(() => Series)
  @Column({
    type: DataType.INTEGER,
  })
  seriesId: number;
}
