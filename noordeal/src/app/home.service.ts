import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }
hproducts;
getdata(){
  return this.hproducts;
}
  gethomepageproducts(){
    console.log('service called');
    return this.http.get('/api/');
  }
}
