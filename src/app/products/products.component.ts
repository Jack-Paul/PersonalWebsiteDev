import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase, AngularFireList }
  from 'angularfire2/database';
import { GlobalProperties } from '../Model/global';
import { ProductModel } from '../Model/ProductModel';





@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  ProductList: AngularFireList<ProductModel>;
  Products: ProductModel[] = [];
  constructor(db: AngularFireDatabase, private route: ActivatedRoute) { 
    this.ProductList = db.list('Products');
    this.ProductList.valueChanges().subscribe(products =>{
      this.Products = products;
      GlobalProperties.Products = products;
      console.log(products);
    })
  }

  ngOnInit(): void {
  }

  
}
