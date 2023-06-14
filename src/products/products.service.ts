import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { Products } from './products.model';
import { IProductsQuery } from './types'; // Import the interfaces

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Products)
    private ProductsModel: typeof Products,
  ) {}

  async paginateAndFilter(
    query: IProductsQuery,
  ): Promise<{ count: number; rows: Products[] }> {
    const limit = +query.limit;
    const offset = +query.offset * 20;
    return this.ProductsModel.findAndCountAll({
      limit,
      offset,
    });
  }

  async bestsellers(): Promise<{ count: number; rows: Products[] }> {
    return this.ProductsModel.findAndCountAll({
      where: { bestseller: true },
    });
  }

  async new(): Promise<{ count: number; rows: Products[] }> {
    return this.ProductsModel.findAndCountAll({
      where: { new: true },
    });
  }

  async findOne(id: number | string): Promise<Products> {
    return this.ProductsModel.findOne({
      where: { id },
    });
  }

  async findOneByName(name: string): Promise<Products> {
    return this.ProductsModel.findOne({
      where: { name },
    });
  }

  async searchByString(
    str: string,
  ): Promise<{ count: number; rows: Products[] }> {
    return this.ProductsModel.findAndCountAll({
      limit: 20,
      where: { name: { [Op.like]: `%${str}%` } },
    });
  }
}
