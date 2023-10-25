import { Inject, Injectable } from '@nestjs/common';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { Product } from './interfaces/product.interface';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('redis') private readonly client: ClientProxy,
  ) {}
  
  @Client({ transport: Transport.REDIS })

  getAllProducts(): Observable<Product[]> {
    const payload = {};
    return this.client.send<Product[]>('products', payload);
  }

  getProductById(id: number): Observable<Product> {
    const payload = {
      id: id
    };
    return this.client.send<Product>('productById', payload);
  }

  filterProducts(query: string): Observable<Product[]> {
    return this.client.send<Product[]>('filterProducts', query);
  }
}
