import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import post from './post';

@Table
export default class user extends Model<user> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number

  @Column
  name: string

  @Column({
    defaultValue: '',
  })
  nickName: string

  @HasMany(() => post)
  post: post[];

  static async getList() {
    return this.findAll({ raw: true })
  }
}
