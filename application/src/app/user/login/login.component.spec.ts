import { ToastsManager, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { FirebaseAuthService } from './../firebase-auth.service';
import { FormsModule } from '@angular/forms';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let de: DebugElement;
  let authService: any;

  beforeEach(async(() => {

    let firebaseServiceStub = {
      login: jasmine.createSpy('login').and.returnValue(true)
    };

    let toastsManagerServiceStub = {
      error: jasmine.createSpy('error').and.returnValue(true)
    };

    let toastsOptionsServiceStub = {
      showCloseButton: true
    };

    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [FormsModule],
      providers: [
        {provide: FirebaseAuthService, useValue: firebaseServiceStub},
        {provide: ToastsManager, useValue: toastsManagerServiceStub},
        {provide: ToastOptions, useValue: toastsOptionsServiceStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();

    authService = TestBed.get(FirebaseAuthService);
    de = fixture.debugElement;

  });

  it('should create', () => {
    console.log(de);
    expect(component).toBeTruthy();
  });
});

describe('LoginComponent Isolated Unit Tests', () => {
  let firebaseServiceStub: any;
  let toastsManagerServiceStub: any;
  let toastsOptionsServiceStub: any;

  beforeEach(() => {
    firebaseServiceStub = {
      login: jasmine.createSpy('login').and.returnValue(true)
    };

    toastsManagerServiceStub = {
      error: jasmine.createSpy('error').and.returnValue(true)
    };

    toastsOptionsServiceStub = {
      showCloseButton: true
    };
  });

  it('init test', () => {
    const sut = new LoginComponent(firebaseServiceStub, toastsManagerServiceStub, toastsOptionsServiceStub);
    expect(sut).toBeTruthy();
  });
});
