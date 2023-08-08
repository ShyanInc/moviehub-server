import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface GenreCreationAttrs {
  value: string;
  description: string;
}

@Table({ tableName: 'genres' })
export class Genre extends Model<Genre, GenreCreationAttrs> {
  @ApiProperty({ example: 1, description: 'Unique indentification' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'drama', description: 'Genre value' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  value: string;

  @ApiProperty({ example: 'Drama', description: 'Genre description' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  description: string;
}
