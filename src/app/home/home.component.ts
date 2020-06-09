import { Component, OnInit } from '@angular/core';
import {PRODUCTS} from '../product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
products = PRODUCTS;
  constructor(public productss: ProductService) { }

  ngOnInit(): void {
  }


}
