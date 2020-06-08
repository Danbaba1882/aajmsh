import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
quantity = 1;
  constructor() { }

  ngOnInit(): void {
  }

  addtoCart(){
    console.log(this.quantity);
  }

}
