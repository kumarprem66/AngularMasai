import { Injectable } from '@angular/core';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  products:Product[] = [
    { id: 1, productName: 'Laptop', price: 1200, category: 'Electronics' },
    { id: 2, productName: 'Smartphone', price: 800, category: 'Electronics' },
    { id: 3, productName: 'Headphones', price: 150, category: 'Electronics' },
    { id: 4, productName: 'Desk', price: 300, category: 'Furniture' },
    { id: 5, productName: 'Chair', price: 100, category: 'Furniture' },
    // Add more dummy data here...
  ];
  constructor() { }


  getAllProduct():Product[]{
    return this.products;
  }

  getProductDetails(id:number){

     this.products.filter((prod)=>{

      return prod.id==id
    })
  }
}
