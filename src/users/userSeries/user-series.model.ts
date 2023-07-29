import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from '../users.model';
import { Series } from '../../series/series.model';

@Table({ tableName: 'user_series', createdAt: false, updatedAt: false })
export class UserSeries extends Model<UserSeries> {
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

  @ForeignKey(() => Series)
  @Column({ type: DataType.INTEGER })
  seriesId: number;

  @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
  planned: boolean;

  @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
  watched: boolean;

  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  rating: number;
}
