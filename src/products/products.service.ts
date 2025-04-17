import { HttpService, Injectable, InternalServerErrorException } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { IProduct } from '../types/product';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  private origin : string
  
  constructor(
    private httpService: HttpService
  ) {
    this.origin = 'https://fakestoreapi.com/products'
  }

  async get(): Promise<IProduct[]> {
    try {
      const { data: products } = await firstValueFrom(
        this.httpService.get<IProduct[]>(this.origin)
      )

      const categoryMap = new Map<string, {totalRate: number, count: number}>();
      // const newCategoryMap: {
      //   [key: string]: {avgRate: number, totalRate: number, count: number}
      // } = {}

      // for(const p of products ){
      //   const c = newCategoryMap[p.category]
      //   if(!c) {
      //     newCategoryMap[p.category] = {
      //       totalRate: p.rating.rate,
      //       count: 1,
      //       avgRate: 0
      //     }
      //     continue
      //   }

      //   newCategoryMap[p.category].count ++
      //   newCategoryMap[p.category].totalRate += p.rating.rate
      // }

      // for(const c in newCategoryMap)
      //   newCategoryMap[c].avgRate = newCategoryMap[c].totalRate / newCategoryMap[c].count
      
      for (const { category, rating } of products) {
        if (!categoryMap.has(category)) {
          categoryMap.set(category, { totalRate: 0, count: 0 });
        }
    
        const categoryData = categoryMap.get(category)!;
        categoryData.totalRate += rating.rate;
        categoryData.count += 1;
      }
      console.log(categoryMap);
      
  
      return products.map(product => {
        let averageCategoryRate = 0
        const categoryData = categoryMap.get(product.category)
  
        if(categoryData)
          averageCategoryRate = categoryData.totalRate / categoryData.count
  
        product.averageCategoryRate = averageCategoryRate
        return product
      })

    } catch(e) {
      throw new InternalServerErrorException()
    }
  }

  async getCategories (): Promise<string[]> {
    try {
      const { data: categories } = await firstValueFrom(
        this.httpService.get<string[]>(`${this.origin}/categories`)
      )
  
      return categories
    } catch(e) {
      throw new InternalServerErrorException(e)
    }
  }

  async create(body: CreateProductDto) : Promise<IProduct> {
    try{
      const { data: product } = await firstValueFrom(
        this.httpService.post<IProduct>(this.origin, body)
      )
  
      return {
        ...product,
        rating: {
          rate: 0,
          count: 1
        }
      }
    } catch(e) {
      throw new InternalServerErrorException(e)
    }
  }
}
