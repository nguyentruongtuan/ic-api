import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { GetProductRequest } from './model/getProductRequest';

@Injectable()
export class AppService {
  constructor(
    @Inject('PRODUCT_SERVICE') private readonly productService: ClientProxy,
  ) {}

  getProducts(request: GetProductRequest) {
    return this.productService.send<string>({ cmd: 'getProducts' }, request);
  }

  getProduct(id: number) {
    return this.productService.send<string>({ cmd: 'getProduct' }, { id: id });
  }
}
