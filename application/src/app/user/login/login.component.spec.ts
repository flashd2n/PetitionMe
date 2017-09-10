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
  let emailInput: HTMLInputElement;
  let passwordInput: HTMLInputElement;
  let loginButton: HTMLElement;

  beforeEach(async(() => {

    const firebaseServiceStub = {
      login: jasmine.createSpy('login').and.returnValue(true)
    };

    const toastsManagerServiceStub = {
      error: jasmine.createSpy('error').and.returnValue(true)
    };

    const toastsOptionsServiceStub = {
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

    authService = TestBed.get(FirebaseAuthService);
    de = fixture.debugElement;

    emailInput = fixture.debugElement.query(By.css('#emailInp')).nativeElement;
    passwordInput = fixture.debugElement.query(By.css('#passInp')).nativeElement;
    loginButton = fixture.debugElement.query(By.css('button')).nativeElement;
  });

  it('Should display login button', () => {
    const loginBtn = de.query(By.css('button')).nativeElement;
    expect(loginBtn).toBeTruthy();
  });

  it('Should display email input field', () => {
    const emailInputEl = de.query(By.css('#emailInp')).nativeElement;
    expect(emailInputEl).toBeTruthy();
  });

  it('Should display password input field', () => {
    const passwordInputEl = de.query(By.css('#passInp')).nativeElement;
    expect(passwordInputEl).toBeTruthy();
  });

  it('Should correctly collect the email from the input field', () => {
    fixture.detectChanges();

    fixture.whenStable()
      .then(() => {
        emailInput.value = 'kalin@test.com';
        emailInput.dispatchEvent(new Event('input'));

        expect(fixture.componentInstance.email).toBe('kalin@test.com');
      });
  });

  it('Should correctly collect the password from the input field', () => {
    fixture.detectChanges();

    fixture.whenStable()
      .then(() => {
        passwordInput.value = '1234567';
        passwordInput.dispatchEvent(new Event('input'));

        expect(fixture.componentInstance.password).toBe('1234567');
      });
  });

  it('Should call authService login method when email and password are provided', () => {
    fixture.detectChanges();

    fixture.whenStable()
      .then(() => {
        emailInput.value = 'kalin@test.com';
        emailInput.dispatchEvent(new Event('input'));

        passwordInput.value = '1234567';
        passwordInput.dispatchEvent(new Event('input'));

        fixture.detectChanges();

        loginButton.click();

        fixture.whenStable().then(() => {
          expect(authService.login.calls.count()).toBe(1);
        });

      });
  });

  it('Should NOT call authService login method when email is not provided', () => {
    fixture.detectChanges();

    fixture.whenStable()
      .then(() => {
        passwordInput.value = '1234567';
        passwordInput.dispatchEvent(new Event('input'));

        fixture.detectChanges();

        loginButton.click();

        fixture.whenStable().then(() => {
          expect(authService.login.calls.count()).toBe(0);
        });

      });
  });

  it('Should NOT call authService login method when password is not provided', () => {
    fixture.detectChanges();

    fixture.whenStable()
      .then(() => {
        emailInput.value = 'kalin@test.com';
        emailInput.dispatchEvent(new Event('input'));

        fixture.detectChanges();

        loginButton.click();

        fixture.whenStable().then(() => {
          expect(authService.login.calls.count()).toBe(0);
        });

      });
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
