import { Injectable } from '@nestjs/common';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { Product } from './interfaces/product.interface';

@Injectable()
export class ProductsService {
  @Client({ transport: Transport.REDIS })
  private client: ClientProxy;

  getProducts(): Observable<Product[]> {
    const payload = {};
    return this.client.send<Product[]>('products', payload);
  }
}
