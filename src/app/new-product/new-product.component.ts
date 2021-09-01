import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// Import the functions you need from the SDKs you need

import {v4 as uuidv4} from 'uuid';
import { AngularFireDatabase, AngularFireList }
  from 'angularfire2/database';
import { ProductModel } from '../Model/ProductModel';
import { ProductsComponent } from '../products/products.component';
import { Alert } from 'selenium-webdriver';


// // Initialize Firebase


@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
   name = "";
   Description = "";
   icon = "";
   DownloadLink = "";
   Screenshot = "";
   Features ="";
   version = "";
   AppType = "";
   New = "";
   privacyPolicyURL = "";
   AppSize = "";

   ProductList: AngularFireList<ProductModel>;
   constructor(db: AngularFireDatabase) { 
    this.ProductList = db.list('Products')
  }

  ngOnInit(): void {
  }


  submit(form: NgForm)
  {
  // Get a reference to the database service
    var uuid = uuidv4();
    var screenshots = (form.value["Screenshot"] as string).split(',');
    var features = (form.value["Features"] as string).split(',');
    var New = (form.value["New"] as string).split(',');
    let prod = new ProductModel(form.value["Name"], form.value["iconLink"], form.value["Description"],screenshots,features,form.value["DownloadLink"], form.value["version"], form.value["AppType"], New, form.value["privacyPolicyURL"],form.value["AppSize"]);
    this.writeUserData(prod);
     
  }
  writeUserData(Prod:ProductModel) {
    this.ProductList.push(Prod);
    alert("Changes Updated");
  }
}


