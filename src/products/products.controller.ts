import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { CreateProductDto } from "./dto/create-product.dto";

@Controller({
  path: '/products'
})
export class ProductController {

  constructor(private readonly productService: ProductsService){}

  @Get()
  async get() {
    return await this.productService.get()
  }

  @Get('/categories')
  async getCategories() {
    return await this.productService.getCategories()
  }

  @Post()
  async create(
    @Body() body: CreateProductDto
  ){
    return await this.productService.create(body)
  }
}