import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductlisterService } from '../productlister.service';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-productlister',
  templateUrl: './productlister.component.html',
  styleUrls: ['./productlister.component.css']
})
export class ProductlisterComponent implements OnInit {
username;
password;
glisters;
listerss;
  constructor(public router: Router, private lister: ProductlisterService, private listers: HomeService) { }

  ngOnInit(): void {
    this.listers.gethomepageproducts().subscribe(data => {
      console.log(data);
      this.glisters = data;
      this.listerss = this.glisters.listers;
      console.log(this.listerss);
    });
  }

  addproductlister(){
this.lister.add(this.username, this.password).subscribe(data => {
  console.log(data);
});

  }
  editproductlister(){}
  deletelister(){

  }

}
