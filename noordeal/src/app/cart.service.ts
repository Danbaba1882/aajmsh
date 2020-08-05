import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cartstorage = localStorage;
  total;
  i;
  items = [];
  createCart(){
    if (this.cartstorage){
    this.items = [];
    this.cartstorage.setItem('cartname', 'Angular Shopping Cart' );
    console.log('cart created');
    }
    else{
    console.log('there is something'); }
  }

  addtocart(product){
    this.items.push(product);
    this.cartstorage.setItem('cartcontent', JSON.stringify(this.items));
    console.log(this.items);
  }
  getItemss(){
    const cartitems = JSON.parse(this.cartstorage.getItem('cartcontent'));
    return cartitems;

  }

}

