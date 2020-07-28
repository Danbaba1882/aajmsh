import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }
upload(name, brand, features, description, images, ucategory, subcategory1, subcategory2,
       cimage, saleprice, salequantity, regularprice, taxclass, taxstatus, downloadable, virtual,
       ptype, cable, ram, color, capacity, warranty, upc, solditems){
const formData = new FormData();
for (const image of images){
  formData.append('images', image);
}
for (const cimages of cimage){
  formData.append('cimages', cimages);
}
formData.append('name', name);
formData.append('brand', brand);
formData.append('features', features);
formData.append('description', description);
formData.append('ucategory', ucategory);
formData.append('subcategory1', subcategory1);
formData.append('subcategory2', subcategory2);
formData.append('cimage', cimage);
formData.append('saleprice', saleprice);
formData.append('salequantity', salequantity);
formData.append('regularprice', regularprice);
formData.append('taxclass', taxclass);
formData.append('taxstatus', taxstatus);
formData.append('downloadable', downloadable);
formData.append('virtual', virtual);
formData.append('ptype', ptype);
formData.append('cable', cable);
formData.append('ram', ram);
formData.append('color', color);
formData.append('capacity', capacity);
formData.append('warranty', warranty);
formData.append('upc', upc);
formData.append('solditems', solditems);


return this.http.post('/api/upload', formData);
}

getcategories(){
  return this.http.get('/api/uploads', {responseType: 'text'});
}

}
