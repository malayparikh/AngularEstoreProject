import { Injectable } from '@angular/core';
import { Product } from '../modal/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products:Product[]=[

    new Product(101, "Water Bottle", 500, 5.0),
    new Product(201, "Sports Shoe", 2500, 5.0),
    new Product(301, "LED TV", 15500, 5.0),
    new Product(401, "Chocolate", 500, 5.0),
    new Product(501, "Smart Phone", 5000, 5.0),
    new Product(601, "Laptop", 60500, 5.0),
  ];

  constructor() { }
  getProducts(){
    return this.products;
  }
}
