import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common/decorators';
import { ProductsService } from './products.service';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { ApiBody, ApiOkResponse } from '@nestjs/swagger';
import {
  GetBestsellersResponse,
  GetByNameRequest,
  GetByNameResponse,
  GetNewResponse,
  PaginateAndFilterResponse,
  SearchRequest,
  SearchResponse,
} from './types';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @ApiOkResponse({ type: PaginateAndFilterResponse })
  @UseGuards(AuthenticatedGuard)
  @Get()
  paginateAndFilter(@Query() query) {
    return this.productsService.paginateAndFilter(query);
  }

  @ApiOkResponse({ type: Get })
  @UseGuards(AuthenticatedGuard)
  @Get('find/:id')
  getOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @ApiOkResponse({ type: GetBestsellersResponse })
  @UseGuards(AuthenticatedGuard)
  @Get('bestsellers')
  getBestsellers() {
    return this.productsService.bestsellers();
  }

  @ApiOkResponse({ type: GetNewResponse })
  @UseGuards(AuthenticatedGuard)
  @Get('new')
  getNew() {
    return this.productsService.new();
  }

  @ApiOkResponse({ type: SearchResponse })
  @ApiBody({ type: SearchRequest })
  @UseGuards(AuthenticatedGuard)
  @Post('search')
  search(@Body() { search }: { search: string }) {
    return this.productsService.searchByString(search);
  }

  @ApiOkResponse({ type: GetByNameResponse })
  @ApiBody({ type: GetByNameRequest })
  @UseGuards(AuthenticatedGuard)
  @Get('name')
  getByName(@Body() { name }: { name: string }) {
    return this.productsService.findOneByName(name);
  }
}
