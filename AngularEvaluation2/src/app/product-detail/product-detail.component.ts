import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{

  prod:Product

  constructor(private ser:DataServiceService){

  }

  ngOnInit(){



  }
}
