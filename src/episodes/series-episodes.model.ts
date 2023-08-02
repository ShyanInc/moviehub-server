import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Episode } from './episodes.model';
import { Series } from '../series/series.model';

@Table({ tableName: 'series_episodes', updatedAt: false, createdAt: false })
export class SeriesEpisodes extends Model<SeriesEpisodes> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Episode)
  @Column({ type: DataType.INTEGER })
  episodeId: number;

  @ForeignKey(() => Series)
  @Column({ type: DataType.INTEGER })
  seriesId: number;
}
