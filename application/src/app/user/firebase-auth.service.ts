import { ToastsManager, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class FirebaseAuthService {

    user: Observable<firebase.User>;

    constructor(private firebaseAuth: AngularFireAuth,
        private router: Router, private toastr: ToastsManager, private toastOpts: ToastOptions) {
        this.user = firebaseAuth.authState;
        this.toastOpts.showCloseButton = true;
    }

    signup(email: string, password: string) {
        this.firebaseAuth
            .auth
            .createUserWithEmailAndPassword(email, password)
            .then(value => {
                this.toastr.success('Success!!!');
                this.router.navigate(['/']);
            })
            .catch(err => {
                this.toastr.error(err.message);
                console.log('Something went wrong:', err.message);
            });
    }

    login(email: string, password: string) {
        return this.firebaseAuth
            .auth
            .signInWithEmailAndPassword(email, password)
            .then(value => {
                this.toastr.success('Success!!!');
                this.router.navigate(['/']);
            })
            .catch(err => {
                this.toastr.error('Incorrect email and/or password');
                console.log('Something went wrong:', err.message);
            });
    }

    logout() {
        this.firebaseAuth
            .auth
            .signOut()
            .then(_ => {
                this.router.navigate(['/']);
            });
    }

    getUser() {
        return this.user;
    }
}
