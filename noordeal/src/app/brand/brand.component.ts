import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brand;
  iphone;
  asus;
  realme;
  honor;
  oppo;
  lenovo;
  nokia;
  nubia;
  blackshark;
  huawei;
  samsung;
  xiaomi;
  amazfit;
  oneplus;

  constructor(public router: Router, private bs: CategoryService) { }

  ngOnInit(): void {
    this.bs.getallcats().subscribe(data => {
  this.brand = data;
  this.iphone = this.brand.iphone;
  this.asus = this.brand.asus;
  this.realme = this.brand.realme;
  this.honor = this.brand.honor;
  this.oppo = this.brand.oppo;
  this.lenovo = this.brand.lenovo;
  this.nokia = this.brand.nokia;
  this.nubia = this.brand.nubia;
  this.blackshark = this.brand.blackshark;
  this.huawei = this.brand.huawei;
  this.samsung = this.brand.samsung;
  this.xiaomi = this.brand.xiaomi;
  this.amazfit = this.brand.amazfit;
  this.oneplus = this.brand.oneplus;
    });
  }

}
