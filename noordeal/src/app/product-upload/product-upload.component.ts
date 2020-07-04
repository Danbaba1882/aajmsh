import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { HomeService } from '../home.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import * as $ from 'jquery';




@Component({
  selector: 'app-product-upload',
  templateUrl: './product-upload.component.html',
  styleUrls: ['./product-upload.component.css']
})
export class ProductUploadComponent implements OnInit {

  name;
  brand;
  price;
  quantity;
  color;
  capacity;
  ram;
  features;
  cimage;
  images = [];
  description;
  category;
  ucategory;
  subcat1;
  subcat2;
  subcategory1;
  subcategory2;
  maccat;
  cascat;
  smarth;
  gbrand;
  ptype;
  virtual;
  downloadable;
  regularprice;
  saleprice;
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
  productspec = {
    cable: this.cable,
    ram: this.ram,
    color: this.color,
    capacity: this.capacity,
    warranty: '1 Year',
    upc: this.upc
  };
  productdata = {
    ptype: this.ptype,
    virtual: this.virtual,
    downloadable: this.downloadable,
    regularprice: this.regularprice,
    saleprice: this.saleprice,
    salequantity: this.salequantity,
    solditems: this.solditems,
    taxstatus: this.taxstatus,
    taxclass: this.taxclass
  };
  res;
  constructor(private prodservice: ProductService, private home: HomeService) { }
  ngOnInit(): void {
    this.home.gethomepageproducts().subscribe(data => {
    this.uploadpage = data;
    this.gcat = this.uploadpage.categories;
    this.gsubcat1 = this.uploadpage.subcat1;
    this.gsubcat2 = this.uploadpage.subcat2;
    this.ggbrand = this.uploadpage.brand;
    this.gcolor = this.uploadpage.color;
    console.log(this.gcat, this.gsubcat1, this.gsubcat2, this.ggbrand, this.gcolor);
    });
    this.prodservice.getcategories().subscribe(data => {
});

  }



oncoverupload(e){
this.cimage = e.target.files[0];
console.log(this.cimage);
}
  onFileChanged(e){
    this.images = e.target.files;
    console.log(this.images);
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

  smarthome(e){
    this.smarth = e.target.value;
  }

  getsubcat1(e){
this.subcat1 = e.target.value;
  }

  getsubcat2(e){
    this.subcat2 = e.target.value;
  }

  getbrand(e){
    this.gbrand = e.target.value;
  }

  onReady(eventData) {
    eventData.plugins.get('FileRepository').createUploadAdapter =  (loader) => {
      console.log(btoa(loader.file));
      return new UploadAdapter(loader);
    };
  }
  uploadProduct(e){
    this.brand = this.gbrand;
    this.ucategory = this.category;
    this.subcategory1 = this.subcat1;
    this.subcategory2 = this.subcat2;
    console.log(this.name);
    console.log(this.brand);
    console.log(this.subcategory1, this.subcategory2, this.category);
    console.log(this.features);
    console.log(this.description);
    console.log(this.productspec);
    console.log(this.productdata);
    console.log(this.images);
    console.log(this.cimage);
    this.prodservice.upload(this.name, this.brand, this.productdata, this.productspec,
    this.features, this.description, this.images, this.ucategory, this.subcategory1, this.subcategory2,
    this.cimage).subscribe(data => {
      this.data = data;
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
