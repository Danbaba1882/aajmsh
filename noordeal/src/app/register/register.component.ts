import { Component, OnInit } from '@angular/core';
import { LoginRegisterService } from '../login-register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
target;
username;
email;
password;
cpassword;

  constructor(private logreg: LoginRegisterService) { }

  ngOnInit(): void {
  }

  registeruser(event){
    this.target = event.target;
    this.username = this.target.querySelector('#username').value;
    this.email = this.target.querySelector('#email').value;
    this.password = this.target.querySelector('#password').value;
    this.logreg.registeruser(this.username, this.email, this.password).subscribe(data => {
      alert(data);
  });
}

}
