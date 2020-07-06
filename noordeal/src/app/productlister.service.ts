import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductlisterService {

  constructor(private http: HttpClient) { }
  add(username, password){
    return this.http.post('/api/addlister', {username, password});
  }


}
