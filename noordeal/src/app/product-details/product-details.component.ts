import { Component, OnInit, ɵConsole } from '@angular/core';
import { ProductService } from '../product.service';
import {PRODUCTS} from '../product';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { HomeService } from '../home.service';
declare var jQuery: any;
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  objectKeys = Object.keys;
quantity = 1;
product;
l;
getproducts;
allproducts;
dgcapacity;
id;
cimage;
variablePrice;
  constructor(public prod: ProductService, public carts: CartService, private route: ActivatedRoute, private home: HomeService) { }

  addtocart(product){
console.log(product.cimage);
product.quantity = this.quantity;
product.cimage = this.cimage;
product.saleprice = this.variablePrice;
console.log(product.cimage);
console.log(product.saleprice);
console.log(product);
console.log(product.cimage.filename);
this.carts.addtocart(product);
  }

  showprice(price){
    console.log(price);
    }

    showcapacityprice(price, cimage, capacity){
      console.log(price);
      console.log(capacity);
      this.variablePrice = price;
      this.dgcapacity = capacity;
      this.cimage = cimage;
      console.log(cimage);
    }

  ngOnInit() {
    console.log(this.allproducts);
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.home.gethomepageproducts().subscribe(products => {
    this.getproducts = products;
    this.allproducts = this.getproducts.allproducts;
    console.log(this.allproducts);
    this.allproducts.forEach((p) => {
      console.log(p);
      if (p._id === this.id) {
        this.product = p;
        console.log(this.product.capacity);
        this.l = this.product.saleprice.length;
        console.log(this.l);
        const data = JSON.stringify(this.product.productData);
        console.log(data);
      }
    });
});
}
}
