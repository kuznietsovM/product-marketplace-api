import { Controller } from '@nestjs/common';

import { AppService } from './app.service';
import { IProduct } from './types/product';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  /** 
   * Add endpoint GET '/products':
   * 1. Get a list of products from REST API (doc in the section below)
   * 2. Add to each product a value `averageCategoryRate`
   *    with the average rating of products that belong to the same category
   * 3. Return result
   * Expected Result:
     [
      {
        "id": 1,
        "title": "Fjallraven - Foldsack ...",
        "description": "Your perfect pack ...",
        "price": 109.5,
        "category": "men's clothing",
        "image": "https://fakestoreapi.com…PKd-2AYL._AC_SL1500_.jpg",
        "rating": {
          "rate": 3.9,
          "count": 120
        },
        "averageCategoryRate": 4.2 // calculated field
      },
      ...
    ]
   * 
   * DOCUMENTATION OF REST API METHOD
   * Listing all products
   * Method: GET
   * Url: 'https://fakestoreapi.com/products'
   * Response example:
      [
        {
          "id": 1,
          "title": "Fjallraven - Foldsack ...",
          "description": "Your perfect pack ...",
          "price": 109.5,
          "category": "men's clothing",
          "image": "https://fakestoreapi.com…PKd-2AYL._AC_SL1500_.jpg",
          "rating": {
            "rate": 3.9,
            "count": 120
          }
        },
        ...
      ]
  */

  /** 
   * Add endpoint GET '/products/categories':
   * 1. Get a list of categories from REST API (doc in the section below)
   * 2. Return result
   * Expected Result:
     [
      "electronics",
      "jewelery",
      ...
    ]
   * 
   * DOCUMENTATION OF REST API METHOD
   * Listing all categories
   * Method: GET
   * Url: 'https://fakestoreapi.com/products/categories'
   * Response example:
      [
      "electronics",
      "jewelery",
      ...
    ]
  */

  /** 
   * Add endpoint POST '/products':
   * 1. Add new product with REST API (doc in the section below)
   * 2. Return result (set rate: 0, count: 1 in the rating field)
   * Expected body:
     {
      title: 'test product',
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic',
     }
    * Expected response:
     {
      id: 21,
      title: 'test product',
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic',
      rating: {
          rate: 0,
          count: 1,
        },
     }
   * DOCUMENTATION OF REST API METHOD
   * Add new product
   * Method: POST
   * Url: 'https://fakestoreapi.com/products'
   * Expected body:
     {
      title: 'test product',
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic'
     }
   * Response example:
      {
      id: 21,
      title: 'test product',
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic'
     }
  */
}
