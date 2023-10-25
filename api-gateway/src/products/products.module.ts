import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [ClientsModule.register([
    {
      name: 'redis',
      transport: Transport.REDIS,
      options: {
        host: 'redis',
        port: 6379,
      }
    },
  ]),],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
