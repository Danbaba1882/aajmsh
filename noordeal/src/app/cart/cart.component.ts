import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cartitems;
cartstorage = localStorage;
carray;
id;
i;
total = 0;
index;
parray;
  constructor(private cartservice: CartService) { }

  onKey(event, item){
    item.quantity = event.target.value;
    this.id = item.ProductId;
    this.parray = this.cartservice.getItemss();
    for (this.i = 0; this.i < this.parray.length; this.i++){
      if (this.parray[this.i].ProductId === this.id){
  this.parray[this.i].quantity = item.quantity;
  console.log(this.parray[this.i].quantity);
  console.log(this.parray[this.i]);
  // this.cartstorage.setItem('cartcontent', this.parray);
      }
    }
    this.cartstorage.setItem('cartcontent', JSON.stringify(this.parray));
  }

  deleteitem(item){
    console.log(item);
    this.id = item.ProductId;
    this.carray = JSON.parse(this.cartstorage.getItem('cartcontent'));
    for (this.i = 0; this.i < this.carray.length; this.i++){
  if (this.carray[this.i].ProductId === this.id){
    this.index = this.carray.indexOf(this.carray[this.i]);
    console.log(this.index);
    this.carray.splice(this.index, 1);
// this.cartstorage.setItem('cartcontent', this.parray);
  }
}
    this.cartstorage.setItem('cartcontent', JSON.stringify(this.carray));
    this.cartitems = JSON.parse(this.cartstorage.getItem('cartcontent'));
  }

  ngOnInit(): void {
    this.cartitems = this.cartservice.getItemss();
    console.log(this.cartitems);
  }

}
