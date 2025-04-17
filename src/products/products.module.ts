import { HttpModule, Module } from '@nestjs/common';
import { ProductController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
  imports: [HttpModule],
  controllers: [ProductController],
  providers: [ProductsService]
})
export class ProductsModule {}
