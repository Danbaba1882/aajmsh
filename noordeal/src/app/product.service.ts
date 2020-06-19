import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }
upload(name, brand, price, quantity, color, capacity, ram, features, description, images, dimages, ucategory, subcategory1, subcategory2){
const formData = new FormData();
for (const image of images){
  formData.append('images', image);
  console.log(image);
}
for (const dimage of dimages){
  formData.append('dimages', dimage );
}
formData.append('name', name);
formData.append('brand', brand);
formData.append('price', price);
formData.append('quantity', quantity);
formData.append('color', color);
formData.append('capacity', capacity);
formData.append('ram', ram);
for (const featuress of features){
  formData.append('features', featuress);
}

for (const descriptionn of description){
  formData.append('description', descriptionn);
}

formData.append('subcategory2', subcategory2);
formData.append('ucategory', ucategory);
formData.append('subcategory1', subcategory1);
return this.http.post('/api/upload', formData);
}

}
