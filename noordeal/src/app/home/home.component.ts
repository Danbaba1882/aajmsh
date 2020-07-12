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
homepage;
smartphones;
tab;
mp;
scooters;
computer;
cam;
tv;
sw;
mac;
sh;

  constructor(public productss: ProductService, private hpservice: HomeService) {
   }

  ngOnInit(): void {
    this.hpservice.gethomepageproducts().subscribe(data =>
      {
        this.homepage = data;
        console.log(this.homepage);
        this.smartphones = this.homepage.sp;
        this.tab = this.homepage.tab;
        this.mp = this.homepage.mp;
        this.cam = this.homepage.cam;
        this.scooters = this.homepage.eles;
        this.sw = this.homepage.sw;
        this.mac = this.homepage.mac;
        this.computer = this.homepage.caa;
        this.tv = this.homepage.tv;
        this.sh = this.homepage.sh;
  });


}
}
