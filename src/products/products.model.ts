import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Products extends Model {
  @Column
  product_manufacture: string;

  @Column({ defaultValue: 0 })
  price: string;

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
}
