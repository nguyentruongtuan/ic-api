import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { GetProductRequest } from './model/getProductRequest';
import { GetProductViewRequest } from './model/getProductViewRequest';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('products')
  getProducts(@Query() viewRequest: GetProductViewRequest) {
    const request = {
      branch: viewRequest.branch?.split(','),
      name: viewRequest.name,
      maxPrice: viewRequest.maxPrice,
      minPrice: viewRequest.minPrice,
      sortBy: viewRequest.sortBy,
      sortDirection: viewRequest.sortDirection,
    } as GetProductRequest;

    return this.appService.getProducts(request);
  }

  @Get('products/:id')
  getProduct(@Param('id') id: number) {
    return this.appService.getProduct(id);
  }
}
