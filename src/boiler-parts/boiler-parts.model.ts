import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class BoilerParts extends Model {
  @Column
  boiler_manufacture: string;

  @Column({ defaultValue: 0 })
  price: string;

  @Column
  parts_manufacture: string;

  @Column
  vendor_code: string;

  @Column
  name: string;

  @Column
  description: string;

  @Column
  images: string;

  @Column({ defaultValue: 0 })
  in_stock: string;

  @Column({ defaultValue: false })
  bestsellers: boolean;

  @Column({ defaultValue: false })
  new: boolean;

  @Column
  popularity: string;

  @Column
  compatibility: string;
}
