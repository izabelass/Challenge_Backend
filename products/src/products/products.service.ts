import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class ProductsService {
  constructor(private readonly httpService: HttpService) {}

  getAllProducts(): Observable<AxiosResponse<any, any>> {
    return this.httpService.get('https://dummyjson.com/products');
  }
}
