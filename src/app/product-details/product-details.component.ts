import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import {PRODUCTS} from '../product';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
quantity = 1;
product;
  constructor(public prod: ProductService, public carts: CartService, private route: ActivatedRoute) { }

  addtocart(product){
product.quantity = this.quantity;
alert(JSON.stringify(product));
this.carts.addtocart(product);
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = PRODUCTS[+params.get('productId')];
  });
}
}
