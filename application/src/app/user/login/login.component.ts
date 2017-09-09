import { FirebaseAuthService } from './../firebase-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(public authService: FirebaseAuthService) {}

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';
  }

  ngOnInit() {
  }

}
