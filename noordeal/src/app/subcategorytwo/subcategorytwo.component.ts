import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-subcategorytwo',
  templateUrl: './subcategorytwo.component.html',
  styleUrls: ['./subcategorytwo.component.css']
})
export class SubcategorytwoComponent implements OnInit {
  sb;
  wch;
  mpch;
  wrch;
  swatch;
  sband;
  cch;
  hol;
  wandb;
  ebie;
  oeoe;
  khp;
  pcgh;
  mouse;
  kb;
  mon;
  mb;
  proc;
  ram;
  hd;
  pd;
  cc;
  pcs;
  stv;
  ctv;
  fktv;
  ltv;
  otv;
  ps;
  xb;
  gc;
  ga;



  constructor(public router: Router, private sc2: CategoryService, private home: HomeService) { }

  ngOnInit(): void {
    this.home.gethomepageproducts().subscribe(data => {
      console.log('this is ', data);
      this.sb = data;
      this.wch = this.sb.wch;
      this.mpch = this.sb.mpch;
      this.wrch = this.sb.wrch;
      this.swatch = this.sb.swatch;
      this.sband = this.sb.sband;
      this.cch = this.sb.cch;
      this.hol = this.sb.hol;
      this.wandb = this.sb.wandb;
      this.ebie = this.sb.ebie;
      this.oeoe = this.sb.oeoe;
      this.khp = this.sb.khp;
      this.pcgh = this.sb.pcgh;
      this.mouse = this.sb.mouse;
      this.kb = this.sb.kb;
      console.log('supposed', this.kb.length);
      this.mon = this.sb;
      this.mb = this.sb.mb;
      this.proc = this.sb.proc;
      this.ram = this.sb.ram;
      this.hd = this.sb.hd;
      this.pd = this.sb.pd;
      this.cc = this.sb.cc;
      this.pcs = this.sb.pcs;
      this.stv = this.sb.stv;
      this.ctv = this.sb.ctv;
      this.fktv = this.sb.fktv;
      this.ltv = this.sb.ltv;
      this.otv = this.sb.otv;
      this.ps = this.sb.ps;
      this.xb = this.sb.xb;
      this.gc = this.sb.gc;
      this.ga = this.sb.ga;
    });
  }

}
