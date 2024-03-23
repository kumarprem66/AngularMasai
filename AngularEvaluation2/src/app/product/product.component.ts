import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { DataServiceService } from '../services/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

 


  products:Product[] = [];
  

  searchText:string = "";
  ascending:boolean = true;


  constructor(private ser:DataServiceService,private router:Router){

  }

  ngOnInit(): void {
    this.products = this.ser.getAllProduct();
  }
  



  searchThisProduct(value:string) {
    
    this.searchText = value;
    
    if(this.searchText != ""){
      this.products = this.products.filter((prod)=>{

        return prod.category.toLowerCase().includes(this.searchText.toLowerCase())
        
  
      })

    }else{
      this.products = this.ser.getAllProduct();
    }
   
  }

  sortProduct(){
    this.ascending = !this.ascending;
    // Sort products array in ascending order based on price
    if(this.ascending){
      this.products =  this.products.slice().sort((a, b) => a.price - b.price);
    }else{
      // Sort products array in descending order based on price
      this.products =  this.products.slice().sort((a, b) => b.price - a.price);
    }

  }

  productDetails(prod:Product){
    
    const datatopass = {
      'id':prod.id
    }
    this.router.navigate(['product-details'],{queryParams:datatopass})
  }
 
  


}

