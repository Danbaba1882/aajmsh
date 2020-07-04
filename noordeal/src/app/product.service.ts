import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }
upload(name, brand, productdata, productspec,
       features, description, images, ucategory, subcategory1, subcategory2, cimage){
const formData = new FormData();
for (const image of images){
  formData.append('images', image);
}
formData.append('name', name);
formData.append('brand', brand);
formData.append('productdata', productdata);
formData.append('productspec', productspec);
formData.append('features', features);
formData.append('description', description);
formData.append('ucategory', ucategory);
formData.append('subcategory1', subcategory1);
formData.append('subcategory2', subcategory2);
formData.append('cimage', cimage);
return this.http.post('/api/upload', formData);
}

getcategories(){
  return this.http.get('/api/uploads', {responseType: 'text'});
}

}
