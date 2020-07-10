import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterService {

  constructor(public http: HttpClient) { }

  registeruser(username, email, password){
    return this.http.post('/api/register', {
      username, email, password
      });
  }

  adminlogiin(username, password){
    return this.http.post('/api/adminlogin', { username, password });
  }
}
