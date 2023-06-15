import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UsersService } from 'src/users/users.service';
import { ShoppingCart } from './shopping-cart.model';
import { ProductsService } from 'src/products/products.service';
import { AddToCardDto } from './dto/add-to-cart.dto';

@Injectable()
export class ShoppingCartService {
  constructor(
    @InjectModel(ShoppingCart)
    private shoppingCartModel: typeof ShoppingCart,
    private readonly usersService: UsersService,
    private readonly productsService: ProductsService,
  ) {}

  async findAll(userId: number | string): Promise<ShoppingCart[]> {
    return this.shoppingCartModel.findAll({ where: { userId } });
  }

  async add(AddToCardDto: AddToCardDto) {
    const cart = new ShoppingCart();
    const user = await this.usersService.findOne({
      where: { username: AddToCardDto.username },
    });
    const product = await this.productsService.findOne(AddToCardDto.productId);

    cart.userId = user.id;
    cart.productId = product.id;
    cart.product_manufacturer = product.product_manufacturer;
    cart.price = product.price;
    cart.in_stock = product.in_stock;
    cart.image = JSON.stringify(product.images)[0];
    cart.name = product.name;
    cart.total_price = product.price;

    return cart.save();
  }

  async updateCount(
    count: number,
    productId: number,
  ): Promise<{ count: number }> {
    await this.shoppingCartModel.update({ count }, { where: { productId } });

    const product = await this.shoppingCartModel.findOne({
      where: { productId },
    });
    return { count: product.count };
  }

  async updateTotalPrice(
    total_price: number,
    productId: number,
  ): Promise<{ total_price: number }> {
    await this.shoppingCartModel.update(
      { total_price },
      { where: { productId } },
    );

    const product = await this.shoppingCartModel.findOne({
      where: { productId },
    });
    return { total_price: product.total_price };
  }

  async remove(productId: number): Promise<void> {
    const product = await this.shoppingCartModel.findOne({
      where: { productId },
    });

    await product.destroy();
  }

  async removeAll(userId: number): Promise<void> {
    await this.shoppingCartModel.destroy({ where: { userId } });
  }
}
