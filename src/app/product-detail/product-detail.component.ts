import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalProperties } from '../Model/global';
import { ProductModel } from '../Model/ProductModel';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  prod: ProductModel;
  constructor(private route: ActivatedRoute) { 
    var Product: ProductModel | any = null;
    let name = this.route.snapshot.paramMap.get('Name')
    GlobalProperties.Products.forEach(product => {
      if(product.Name == name)
        Product = product;
    });
    this.prod = Product;
    
  }

  ngOnInit(): void {
     

  }

}
