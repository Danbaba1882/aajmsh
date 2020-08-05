import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { FlashMessagesService } from 'angular2-flash-messages';
declare var jQuery: any;
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.css']
})

export class DashboardSidebarComponent implements OnInit {
category;
subcategory1;
subcategory2;
brand;
color;
cable;
capacity;
categoryR;
categoryRR;
scI;
scII;
b;
c;
scIf;
scIIf;
bf;
cf;

  constructor(private dashboard: DashboardService, private flash: FlashMessagesService) { }

  ngOnInit(): void {
  }

  addcategory(){
  console.log(this.category);
  this.dashboard.addcategory(this.category).subscribe(category => {
  console.log(category);
  this.categoryR = category;
  this.categoryRR = this.categoryR.success;
  this.category = '';
  if (this.category === ''){
    this.categoryRR = this.categoryR.success;
  }
  if (this.categoryR.success === true){
    setTimeout(() => {
      $('.alert').alert('close');
  }, 2000);
  }
});

  }

  addcable(){
this.dashboard.addcable(this.cable).subscribe( data => {
console.log(data);
});
  }

  addcapacity(){
this.dashboard.addcapacity(this.capacity).subscribe(data => {
  console.log(data);
});
  }

    showFlash(){
      // 1st parameter is a flash message text
      // 2nd parameter is optional. You can pass object with options.
      this.flash.show('Success! Category Added', { cssClass: 'alert-success', timeout: 20000 });
  }

  showFlashs1(){
    // 1st parameter is a flash message text
    // 2nd parameter is optional. You can pass object with options.
    this.flash.show('Success! Subcategory I Added', { cssClass: 'alert-success', timeout: 20000 });
}

showFlashs2(){
  // 1st parameter is a flash message text
  // 2nd parameter is optional. You can pass object with options.
  this.flash.show('Success! Subcategory II Added', { cssClass: 'alert-success', timeout: 20000 });
}

showFlashb(){
  // 1st parameter is a flash message text
  // 2nd parameter is optional. You can pass object with options.
  this.flash.show('Success! Brand Added', { cssClass: 'alert-success', timeout: 20000 });
}

showFlashc(){
  // 1st parameter is a flash message text
  // 2nd parameter is optional. You can pass object with options.
  this.flash.show('Success! Color Added', { cssClass: 'alert-success', timeout: 20000 });
}


  addsubcategory1(){
    this.dashboard.addsubcategory1(this.subcategory1).subscribe(subcategory1 => {
      this.scI = subcategory1;
      this.scIf = this.scI.success;
      console.log(subcategory1);
      this.subcategory1 = '';
      if (this.scI.success === true){
        $('.toast').toast('show');
      }
    });
  }
  addsubcategory2(){
    this.dashboard.addsubcategory2(this.subcategory2).subscribe(subcategory2 => {
      this.scII = subcategory2;
      this.scIIf = this.scII.success;
      this.subcategory2 = '';
      console.log(subcategory2);
    });
  }
  addbrand(){
    this.dashboard.addbrand(this.brand).subscribe(brand => {
      this.b = brand;
      this.bf = this.b.success;
      this.brand = '';
      console.log(brand);
    });
  }
  addcolor(){
    this.dashboard.addcolor(this.color).subscribe(color => {
      this.c = color;
      this.cf = this.c.success;
      this.color = '';
      console.log(color);
    });
  }

}
