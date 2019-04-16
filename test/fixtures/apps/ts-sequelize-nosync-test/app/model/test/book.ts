import { Table, Column, Model } from 'sequelize-typescript';

@Table
export default class book extends Model<book> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number

  @Column
  name: string
}
