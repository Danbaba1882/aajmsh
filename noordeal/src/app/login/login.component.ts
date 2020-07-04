import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private d: DashboardService) { }

  ngOnInit(): void {
    this.d.getlll().subscribe(data => {
      console.log(data);
    });
  }

}
