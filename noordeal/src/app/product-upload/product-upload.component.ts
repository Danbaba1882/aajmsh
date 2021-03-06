import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProductService } from '../product.service';
import { HomeService } from '../home.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
declare var jQuery: any;
import * as bootstrap from 'bootstrap';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';




@Component({
  selector: 'app-product-upload',
  templateUrl: './product-upload.component.html',
  styleUrls: ['./product-upload.component.css']
})
export class ProductUploadComponent implements OnInit {
  @ViewChild('alert', { static: true }) alert: ElementRef;

  name;
  brand;
  price;
  minimumPrice;
  maximumPrice;
  quantity;
  color;
  capacity;
  dgcapacity;
  ram;
  features;
  cimage = [];
  images = [];
  description;
  category = 'Select Product Category';
  ucategory;
  subcat1 = 'Select Product Subcategory I';
  subcat2 = 'Select Product Subcategory II';
  subcategory1;
  subcategory2;
  maccat;
  cascat;
  smarth;
  gbrand = 'Select Product Brand';
  ptype;
  virtual;
  warranty = '1 Year';
  downloadable;
  regularprice;
  saleprice;
  salepriceColor;
  regularpriceColor;
  salequantityColor;
  solditemsColor;
  allregularprice = [];
  allsaleprice = [];
  allsalequantity = [];
  allsolditems = [];
  allregularpriceColor = [];
  allsalepriceColor = [];
  allsalequantityColor = [];
  allsolditemsColor = [];
  allcapacity = [];
  salequantity;
  solditems;
  taxstatus;
  taxclass;
  data;
  upc;
  uploadpage;
  gcat;
  gsubcat1;
  gsubcat2;
  ggbrand;
  gcolor;
  cable;
  cables;
  res;
  a = $('#modal');
  constructor(private prodservice: ProductService, private home: HomeService, private flash: FlashMessagesService) { }
  ngOnInit(): void {
    this.home.gethomepageproducts().subscribe(data => {
    this.uploadpage = data;
    this.gcat = this.uploadpage.categories;
    this.gsubcat1 = this.uploadpage.subcat1;
    this.gsubcat2 = this.uploadpage.subcat2;
    this.ggbrand = this.uploadpage.brand;
    this.gcolor = this.uploadpage.color;
    this.cables = this.uploadpage.cable;
    this.dgcapacity = this.uploadpage.capacity;
    console.log(this.gcat, this.gsubcat1, this.gsubcat2, this.ggbrand, this.gcolor);
    });
    this.prodservice.getcategories().subscribe(data => {
});

  }
oncoverupload(e){
this.cimage = e.target.files;
console.log(this.cimage);
}


  onFileChanged(e){
    this.images = e.target.files;
    console.log(this.images);
  }

  addsalesprice(){
    if (this.saleprice !== undefined && this.saleprice !== ''){
    this.allsaleprice.push(this.saleprice);
    console.log(this.allsaleprice);
    this.saleprice = '';
    }
  }

  addregularprice(){
    if (this.regularprice !== undefined && this.regularprice !== ''){
      this.allregularprice.push(this.regularprice);
      console.log(this.allregularprice);
      this.regularprice = '';
    }
  }

  addsalequantity(){
    if (this.salequantity !== undefined && this.salequantity !== ''){
      this.allsalequantity.push(this.salequantity);
      console.log(this.allsalequantity);
      this.salequantity = '';
    }
  }

  addsolditems(){
    if (this.solditems !== undefined && this.solditems !== ''){
    this.allsolditems.push(this.solditems);
    console.log(this.allsolditems);
    this.solditems = '';
    }
  }


  addsalespriceColor(){
    if (this.salepriceColor !== undefined && this.salepriceColor !== ''){
    this.allsalepriceColor.push(this.salepriceColor);
    console.log(this.allsalepriceColor);
    this.salepriceColor = '';
    }
  }

  addregularpriceColor(){
    if (this.regularpriceColor !== undefined && this.regularpriceColor !== ''){
      this.allregularpriceColor.push(this.regularpriceColor);
      console.log(this.allregularpriceColor);
      this.regularpriceColor = '';
    }
  }

  addsalequantityColor(){
    if (this.salequantityColor !== undefined && this.salequantityColor !== ''){
      this.allsalequantityColor.push(this.salequantityColor);
      console.log(this.allsalequantityColor);
      this.salequantityColor = '';
    }
  }

  addsolditemsColor(){
    if (this.solditemsColor !== undefined && this.solditemsColor !== ''){
    this.allsolditemsColor.push(this.solditemsColor);
    console.log(this.allsolditemsColor);
    this.solditemsColor = '';
    }
  }

  getcatvalue(e){
this.category = e.target.value;
  }

  mobileacat(e){
    this.maccat = e.target.value;
  }

  cacat(e){
this.cascat = e.target.value;
  }

  gtaxclass(e){
    this.taxclass = e.target.value;
  }

  gtaxstatus(e){
    this.taxstatus = e.target.value;
  }

  ggcolor(e){
    this.color = e.target.value;
  }

  gwarranty(e){
    this.warranty = e.target.value;
  }

  gcapacity(e){
    this.capacity = e.target.value;
    this.allcapacity.push(this.capacity);
    console.log(this.capacity);
    console.log(this.allcapacity);
  }

  gupc(e){
    this.upc = e.target.value;
  }

  gcable(e){
    this.gcable = e.target.value;
  }

  gptype(e){
this.ptype = e.target.value;
console.log(this.ptype);
  }

  gpv(e){

  }


  onReady(eventData) {
    eventData.plugins.get('FileRepository').createUploadAdapter =  (loader) => {
      console.log(btoa(loader.file));
      return new UploadAdapter(loader);
    };
  }
  uploadProduct(e){
    if (this.maximumPrice === undefined && this.minimumPrice === undefined){
      this.maximumPrice = 0;
      this.minimumPrice = 0;
    }
    this.brand = this.gbrand;
    this.ucategory = this.category;
    this.subcategory1 = this.subcat1;
    this.subcategory2 = this.subcat2;
    this.prodservice.upload(this.name, this.brand,
    this.features, this.description, this.images, this.ucategory, this.subcategory1, this.subcategory2,
    this.cimage, this.allsaleprice, this.allsalequantity, this.allregularprice, this.taxclass, this.taxstatus,
    this.downloadable, this.virtual, this.ptype, this.cable, this.color, this.allcapacity, this.warranty,
    this.upc, this.allsolditems, this.minimumPrice, this.maximumPrice).subscribe(data => {
      this.data = data;
      if (this.data.success === true){
        this.name = '';
        this.gbrand = 'Select Product Brand';
        this.subcat1 = 'Select Product Subcategory I';
        this.subcat2 = 'Select Product Subcategory II';
        this.category = 'Select Product Category';
        this.cable = '';
        this.ram = '';
        this.color = '';
        this.capacity = '';
        this.warranty = '1 Year';
        this.upc = '';
        this.ptype = '';
        this.virtual = '';
        this.downloadable = '';
        this.allregularprice = [];
        this.allsaleprice = [];
        this.allsalequantity = [];
        this.allsolditems = [];
        this.taxstatus = '';
        this.taxclass = '';
        this.cimage = [];
        this.images = [];
        this.features = '';
        this.description = '';
        $('#modal').modal();
      }
      console.log('this is data ', data);
        });
  }

}

export class UploadAdapter {
  private loader;
  constructor(loader: any) {
    this.loader = loader;
    console.log(this.readThis(loader.file));
  }
  MyBlob = new Blob(['content'], {type : 'text/plain'});


  public upload(): Promise<any> {
    // "data:image/png;base64,"+ btoa(binaryString)
    return this.readThis(this.loader.file);
  }

  readThis(file: File): Promise<any> {
    console.log(file);
    const imagePromise: Promise<any> = new Promise((resolve, reject) => {
      const myReader: FileReader = new FileReader();
      myReader.onloadend = (e) => {
        const image = myReader.result;
        console.log(image);
        return { default: 'data:image/png;base64,' + image };
        resolve();
      };
      myReader.readAsDataURL(this.MyBlob);
    });
    return imagePromise;
  }

}
