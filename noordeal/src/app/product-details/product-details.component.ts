import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import {PRODUCTS} from '../product';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  objectKeys = Object.keys;
quantity = 1;
product;
getproducts;
allproducts;
id;
  constructor(public prod: ProductService, public carts: CartService, private route: ActivatedRoute, private home: HomeService) { }

  addtocart(product){
product.quantity = this.quantity;
this.carts.addtocart(product);
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
        const data = JSON.stringify(this.product.productData);
        console.log(data);
      }
    });
});
}
}
