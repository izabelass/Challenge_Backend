import { Module } from '@nestjs/common';
import { ProductsLibraryService } from './products-library.service';

@Module({
  providers: [ProductsLibraryService],
  exports: [ProductsLibraryService],
})
export class ProductsLibraryModule {}
