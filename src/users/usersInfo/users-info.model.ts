import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from '../users.model';

interface UsersInfoCreationAttrs {
  name: string;
  surname?: string;
  status?: string;
  birthDate: Date;
}

@Table({ tableName: 'user_info', createdAt: false, updatedAt: false })
export class UserInfo extends Model<UserInfo, UsersInfoCreationAttrs> {
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

  @Column({ type: DataType.STRING })
  name: string;

  @Column({ type: DataType.STRING })
  surname: string;

  @Column({ type: DataType.STRING })
  status: string;

  @Column({ type: DataType.DATE })
  birthDate: Date;
}
