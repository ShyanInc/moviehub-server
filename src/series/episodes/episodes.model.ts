import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Series } from '../series.model';

interface EpisodeCreationAttrs {
  season: number;
  episode: number;
  translatedTitle: string;
  originalTitle: string;
  releaseDate: Date;
}

@Table({ tableName: 'episodes', createdAt: false, updatedAt: false })
export class Episode extends Model<Episode, EpisodeCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Series)
  @Column({ type: DataType.INTEGER })
  seriesId: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  season: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  episode: number;

  @Column({ type: DataType.STRING, allowNull: false })
  translatedTitle: string;

  @Column({ type: DataType.STRING, allowNull: false })
  originalTitle: string;

  @Column({ type: DataType.DATE, allowNull: false })
  releaseDate: Date;
}
