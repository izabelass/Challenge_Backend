import { Controller } from '@nestjs/common';
import { ProductsService } from './products.service';
import {
  MessagePattern,
  Payload,
} from '@nestjs/microservices';
import { Product } from './interfaces/product.interface';
import { ProductDto } from './dtos/product.dto';

@Controller()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @MessagePattern('products')
  async getProducts(@Payload() data: ProductDto): Promise<Product[]> {
    console.log('controller foi acessado no products')
    return await this.productsService.getAllProducts();
  }

  @MessagePattern('productById')
  async getProductById(@Payload() data: ProductDto): Promise<Product[]> {
    return await this.productsService.getProductById(data.id);
  }

  @MessagePattern('filterProducts')
  async filterProducts(@Payload() query: string): Promise<Product[]> {
    return await this.productsService.filterProducts(query);
  }
}
