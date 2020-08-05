import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }
  addcategory(category){
return this.http.post('/api/category', {category});
  }
  addsubcategory1(subcategory1){
    return this.http.post('/api/subcategory1', {subcategory1});
  }

  addsubcategory2(subcategory2){
   return this.http.post('/api/subcategory2', {subcategory2});
  }

  addbrand(brand){
   return this.http.post('/api/brand', {brand});
  }

  addcolor(color){
  return  this.http.post('/api/color', {color});
  }

  addcapacity(capacity){
    return this.http.post('/api/capacity', {capacity});
   }

   addcable(cable){
   return  this.http.post('/api/cable', {cable});
   }
}
