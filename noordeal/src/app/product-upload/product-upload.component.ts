import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

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
  feature;
  features;
  cimagess = [];
  images;
  description;
  descriptions;
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
  dimages;
  cimage;
  cimages;
  ufeatures = [];
  udescription = [];
  uimages = [];
  descimages = [];
  constructor(private prodservice: ProductService) { }
  ngOnInit(): void {
  }
oncoverupload(e){
this.cimage = e.target.files[0];
console.log(this.cimage);
}
  onFileChanged(e){
    this.uimages = e.target.files;
    console.log(this.uimages);
  }

  ondescimages(e){
this.descimages = e.target.files;
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

  updatefeatures(e){
    this.feature = e.target.value;
  }
  updatedesc(e){
    this.descriptions = e.target.value;
  }

  adddesc(){
    this.udescription.push(this.descriptions);
  }


  addfeatures(){
    this.ufeatures.push(this.feature);
    console.log(this.ufeatures);
    this.feature = '';
  }

  getsubcat1(e){
this.subcat1 = e.target.value;
alert(this.subcat1);
  }

  getsubcat2(e){
    this.subcat2 = e.target.value;
    alert(this.subcat2);
  }

  getbrand(e){
    this.gbrand = e.target.value;
  }
  uploadProduct(e){
    this.name = e.target.querySelector('#name').value;
    this.brand = this.gbrand;
    this.price = e.target.querySelector('#price').value;
    this.quantity = e.target.querySelector('#quantity').value;
    this.color = e.target.querySelector('#color').value;
    this.capacity = e.target.querySelector('#capacity').value;
    this.ram = e.target.querySelector('#ram').value;
    this.features = this.ufeatures;
    this.description = this.udescription;
    this.images = this.uimages;
    this.dimages = this.descimages;
    this.ucategory = this.category;
    this.subcategory1 = this.subcat1;
    this.subcategory2 = this.subcat2;
    console.log(this.subcategory1, this.subcategory2, this.category);
    this.prodservice.upload(this.name, this.brand, this.price, this.quantity, this.color, this.capacity, this.ram,
    this.features, this.description, this.images, this.dimages, this.ucategory, this.subcategory1, this.subcategory2,
    this.cimage).subscribe(data => {
    });
  }
}
