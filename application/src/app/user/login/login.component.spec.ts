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
  let sut: LoginComponent;

  beforeEach(() => {
    firebaseServiceStub = {
      login: jasmine.createSpy('login').and.returnValue(true)
    };

    toastsManagerServiceStub = {
      error: jasmine.createSpy('error').and.returnValue(true)
    };

    toastsOptionsServiceStub = {
      showCloseButton: false
    };

    sut = new LoginComponent(firebaseServiceStub, toastsManagerServiceStub, toastsOptionsServiceStub);
  });

  it('LoginComponent should exist', () => {
    expect(sut).toBeTruthy();
  });

  it('LoginComponent should initiate with undefined email and password', () => {
    expect(sut.email).toBeUndefined();
    expect(sut.password).toBeUndefined();
  });

  it('LoginComponent should call authService login if password and email are valid', () => {
    sut.password = '1234567';
    sut.email = 'kalin@test.com';
    sut.login();
    expect(firebaseServiceStub.login.calls.count()).toBe(1);
  });

  it('LoginComponent should NOT call authService login if password is not valid', () => {
    sut.password = '1';
    sut.email = 'kalin@test.com';
    sut.login();
    expect(firebaseServiceStub.login.calls.count()).toBe(0);
  });

  it('LoginComponent should NOT call authService login if email is not valid', () => {
    sut.password = '1234567';
    sut.email = 'invalid';
    sut.login();
    expect(firebaseServiceStub.login.calls.count()).toBe(0);
  });

  it('LoginComponent should call toastr error if password is not valid', () => {
    sut.password = '1';
    sut.email = 'kalin@test.com';
    sut.login();
    expect(toastsManagerServiceStub.error.calls.count()).toBe(1);
  });

  it('LoginComponent should call toastr error if email is not valid', () => {
    sut.password = '1234567';
    sut.email = 'invalid';
    sut.login();
    expect(toastsManagerServiceStub.error.calls.count()).toBe(1);
  });

  it('LoginComponent should call toastr error with correct message if email is not valid', () => {
    sut.password = '1234567';
    sut.email = 'invalid';
    sut.login();
    expect(toastsManagerServiceStub.error).toHaveBeenCalledWith('Invalid Email');
  });

  it('LoginComponent should call toastr error with correct message if password is not valid', () => {
    sut.password = '1';
    sut.email = 'kalin@test.com';
    sut.login();
    expect(toastsManagerServiceStub.error).toHaveBeenCalledWith('Password must be atleast 6 chars long.');
  });

  it('LoginComponent should reset the email and password fields after successful login call', () => {
    sut.password = '123456';
    sut.email = 'kalin@test.com';
    sut.login();
    expect(sut.email).toEqual('');
    expect(sut.password).toEqual('');
  });
});
