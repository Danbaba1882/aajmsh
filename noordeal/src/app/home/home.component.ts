import { Component, OnInit } from '@angular/core';
import {PRODUCTS} from '../product';
import { ProductService } from '../product.service';
import { HomeService } from '../home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
products = PRODUCTS;
hpproducts;
prod;
  constructor(public productss: ProductService, private hpservice: HomeService) {
   }

  ngOnInit(): void {
    this.hpservice.gethomepageproducts().subscribe(data =>
      {
        this.hpproducts = data;
      });
    console.log('this is', this.hpproducts);
  }


}
