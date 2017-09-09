import { ToastsManager, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { FirebaseAuthService } from './../firebase-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string;
  password: string;

  constructor(public authService: FirebaseAuthService, private toastr: ToastsManager, private toastOpts: ToastOptions) {
    this.toastOpts.showCloseButton = true;
  }

  signup() {
    if (this.password.length < 6) {
      this.toastr.error('Password must be atleast 6 chars long.');
      return;
    }

    // tslint:disable-next-line:max-line-length
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(this.email)) {
      this.toastr.error('Invalid Email');
      return;
    }

    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  ngOnInit() {
  }

}
