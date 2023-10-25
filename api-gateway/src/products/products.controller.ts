import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './interfaces/product.interface';
import { Observable } from 'rxjs';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('search')
  filterProducts(@Query('q') query: string): Observable<Product[]> {
    return this.productsService.filterProducts(query);
  }

  @Get(':id')
  getById(@Param('id') id: number): Observable<Product> {
    return this.productsService.getProductById(id);
  }

  @Get()
  getAll(): Observable<Product[]> {
    return this.productsService.getAllProducts();
  }
  
}
