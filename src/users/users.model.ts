import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column
  usename: string;

  @Column
  password: string;

  @Column
  email: string;
}
