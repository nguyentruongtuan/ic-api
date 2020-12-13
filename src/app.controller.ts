import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { GetProductRequest } from './model/getProductRequest';
import { GetProductViewRequest } from './model/getProductViewRequest';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('products')
  getProducts(@Query() query: GetProductViewRequest) {
    const request = {
      branch: query.branch.split(','),
    } as GetProductRequest;

    return this.appService.getProducts(request);
  }

  @Get('products/:id')
  getProduct(@Param('id') id: number) {
    return this.appService.getProduct(id);
  }
}
