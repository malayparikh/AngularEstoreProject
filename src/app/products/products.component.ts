import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector:'app-products',
  templateUrl:'./products.component.html',
  styleUrls:['./products.component.css']
})
export class ProductsComponent implements OnInit{

  constructor(private productsService: ProductsService){ }

  products = this.productsService.getProducts();
  showProducts=false;

  categories = [

    {title:"Select Category", itemCount:0},
    {title:"Home & Kitchen", itemCount:200},
    {title:"Furniture", itemCount:300},
    {title:"Clothing", itemCount:34580},
    {title:"Toys", itemCount:8520},
  ];

  productForm = new FormGroup({

    pid: new FormControl(0),
    name:new FormControl(''),
    price: new FormControl(0),
    ratings: new FormControl(0.0),
    category: new FormControl(this.categories[0])

  });
  ngOnInit(): void {
    console.log("Test demo..")

  }
  addProductToDB(){

    //..
  }

}
