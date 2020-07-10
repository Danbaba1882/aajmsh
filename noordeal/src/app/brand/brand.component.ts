import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
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

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
