import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class FirebaseAuthService {

    user: Observable<firebase.User>;

    constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
        this.user = firebaseAuth.authState;
    }

    signup(email: string, password: string) {
        this.firebaseAuth
            .auth
            .createUserWithEmailAndPassword(email, password)
            .then(value => {
                console.log('Success!', value);
                this.router.navigate(['/']);
            })
            .catch(err => {
                console.log('Something went wrong:', err.message);
            });
    }

    login(email: string, password: string) {
        this.firebaseAuth
            .auth
            .signInWithEmailAndPassword(email, password)
            .then(value => {
                console.log('Nice, it worked!');
                this.router.navigate(['/']);
            })
            .catch(err => {
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
}
