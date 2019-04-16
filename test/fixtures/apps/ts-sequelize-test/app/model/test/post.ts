import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import user from './user';

@Table({
  timestamps: true,
})
export default class post extends Model<post> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number

  @Column
  name: string

  @ForeignKey(() => user)
  @Column
  user_id: number
}
