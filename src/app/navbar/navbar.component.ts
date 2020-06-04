import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {RandlService} from '../randl.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  target;
  email;
  username;
  password;
  lomodal;
  constructor(private randl: RandlService, private router: Router) { }
  ngOnInit(): void {
  }
  registerUser(event){
    this.target = event.target;
    this.email = this.target.querySelector('#email').value;
    this.username = this.target.querySelector('#username').value;
    this.password = this.target.querySelector('#password').value;
    this.randl.registerUser(this.email, this.username, this.password).subscribe(data => {
  console.log(data);

    });
  }

  loginUser(event){
    this.target = event.target;
    this.username = this.target.querySelector('#username').value;
    this.password = this.target.querySelector('#password').value;
    const lomodal = document.getElementById('exampleModal');
    console.log('modal is ' + lomodal);
    this.randl.loginUser(this.username, this.password).subscribe(data => {
      console.log(JSON.stringify(data) + ' is what we got from the server');
      if (data.success){
        this.router.navigate(['gurusden']);
      }
  });
}}
