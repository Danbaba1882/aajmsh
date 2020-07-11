import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-subcategoryone',
  templateUrl: './subcategoryone.component.html',
  styleUrls: ['./subcategoryone.component.css']
})
export class SubcategoryoneComponent implements OnInit {
subcat;
pca;
net;
pink;
dslr;
xes;
wear;
chargers;
hp;
crac;
speakers;
cables;
pb;
snscot;
meles;
desc;
lap;
ht;
proj;
tv;
vgc;


  constructor( public router: Router, private catss: CategoryService) { }

  ngOnInit(): void {
    this.catss.getallcats().subscribe(data => {
      this.subcat = data;
      this.pca = this.subcat.pca;
      this.net = this.subcat.net;
      this.pink = this.subcat.pink;
      this.dslr = this.subcat.dslr;
      this.xes = this.subcat.xes;
      this.wear = this.subcat.wear;
      this.chargers = this.subcat.chargers;
      this.hp = this.subcat.hp;
      this.crac = this.subcat.crac;
      this.speakers = this.subcat.speakers;
      this.cables = this.subcat.cables;
      this.pb = this.subcat.pb;
      this.snscot = this.subcat.snscot;
      this.meles = this.subcat.meles;
      this.desc = this.subcat.desc;
      this.lap = this.subcat.lab;
      this.ht = this.subcat.ht;
      this.proj = this.subcat.proj;
      this.tv = this.subcat.tv;
      this.vgc = this.subcat.vgc;
      console.log(data);
    });
  }

}
