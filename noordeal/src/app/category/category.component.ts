import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  product;
  allcats;
  sh;
  sp;
  es;
  tab;
  cam;
  ca;
  ma;
  mp;

  constructor(public router: Router, private category: CategoryService) { }

  ngOnInit(): void {
    this.category.getallcats().subscribe(data => {
    this.allcats = data;
    this.sh = this.allcats.sh;
    this.cam = this.allcats.cam;
    this.sp = this.allcats.sp;
    this.tab = this.allcats.tab;
    this.mp = this.allcats.mp;
    this.ma = this.allcats.mac;
    this.ca = this.allcats.caa;
    this.es = this.allcats.eles;
    console.log(data);
    });
  }

}
