import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { Product } from './interfaces/product.interface';

@Injectable()
export class ProductsService {
  public baseUrl = "https://dummyjson.com/products";

  constructor(private readonly httpService: HttpService) {}

  async getAllProducts(): Promise<Product[]> {
    const { data } = await firstValueFrom(
      this.httpService.get<Product[]>(this.baseUrl).pipe(
        catchError((error: AxiosError) => {
          console.error(error?.response?.data);
          throw 'An error happened!';
        }),
      ),
    );
    return data;
  }

  async getProductById(id: number): Promise<Product[]> {
    const { data } = await firstValueFrom(
      this.httpService.get<Product[]>(`${this.baseUrl}/${id}`).pipe(
        catchError((error: AxiosError) => {
          console.error(error?.response?.data);
          throw 'An error happened!';
        }),
      ),
    );
    return data;
  }

  async filterProducts(query: string): Promise<Product[]> {
    const { data } = await firstValueFrom(
      this.httpService.get<Product[]>(`${this.baseUrl}/search?q=${query}`).pipe(
        catchError((error: AxiosError) => {
          console.error(error?.response?.data);
          throw 'An error happened!';
        }),
      ),
    );
    return data;
  }
}
