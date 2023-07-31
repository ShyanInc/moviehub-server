import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface GenreCreationAttrs {
  value: string;
  description: string;
}

@Table({ tableName: 'genres' })
export class Genre extends Model<Genre, GenreCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  value: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  description: string;
}
