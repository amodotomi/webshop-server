import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Products extends Model {
  @Column
  product_manufacturer: string;

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
  bestseller: boolean;

  @Column({ defaultValue: false })
  new: boolean;

  @Column
  popularity: string;
}
