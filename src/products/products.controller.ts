import {
  Body,
  Controller,
  Get,
  Param,
  Query,
  UseGuards,
} from '@nestjs/common/decorators';
import { ProductsService } from './products.service';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @UseGuards(AuthenticatedGuard)
  @Get()
  paginateAndFilter(@Query() query) {
    return this.productsService.paginateAndFilter(query);
  }

  @UseGuards(AuthenticatedGuard)
  @Get('find/:id')
  getOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @UseGuards(AuthenticatedGuard)
  @Get('bestsellers')
  getBestsellers() {
    return this.productsService.bestsellers();
  }

  @UseGuards(AuthenticatedGuard)
  @Get('new')
  getNew() {
    return this.productsService.new();
  }

  @UseGuards(AuthenticatedGuard)
  @Get('search')
  Search(@Body() { search }: { search: string }) {
    return this.productsService.searchByString(search);
  }

  @UseGuards(AuthenticatedGuard)
  @Get('name')
  getByName(@Body() { name }: { name: string }) {
    return this.productsService.findOneByName(name);
  }
}
