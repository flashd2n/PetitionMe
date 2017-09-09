import { FirebaseAuthService } from './firebase-auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private authService: FirebaseAuthService) { }

  canActivate(): boolean {
      if (window.localStorage.length > 1) {
          return true;
      } else {
          return false;
      }
  }
}
