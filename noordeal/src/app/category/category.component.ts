import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  sh = [];
  sp = [];
  es = [];
  tab = [];
  cam = [];
  ca = [];
  ma = [];
  mp = [];

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
