import { Component, OnInit } from '@angular/core';
import { LoginRegisterService } from '../login-register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
username;
password;
status;
  constructor(private ls: LoginRegisterService, public router: Router) { }

  ngOnInit(): void {
  }
adminlogin(){
console.log(this.password, this.username);
this.ls.adminlogiin(this.username, this.password).subscribe(data => {
console.log(data);
this.status = data;
if (this.status.success === true) {
  this.router.navigate(['admin']);
}
});
}
}
