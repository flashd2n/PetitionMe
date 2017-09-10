import { FirebaseAuthService } from './../firebase-auth.service';
import { FirebasePetitionService } from './../../petition/firebase-petition.service';
import { FormsModule } from '@angular/forms';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { UserComponent } from './user.component';
import { DataStub } from './data.stub';
import { AuthStub } from './auth.stub';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { RouterTestingModule } from '@angular/router/testing';

describe('User Component', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let de: DebugElement;
  let authService: any;
  let firebaseService: any;
  const patitionsIncludeUser = [
    {
      category: 'categoryOne',
      city: 'Sofia',
      country: 'Bulgaria',
      creationDate: '09/08/17',
      creator: 'creatorOne',
      deliverTo: 'deliverOne',
      editorsChoice: true,
      featured: true,
      goal: 10,
      longDescription: 'longOne',
      name: 'nameOne',
      shortDescription: 'shortOne',
      signupUsers: ['kalin@test.com', 'pencho@test.com'],
      $key: 0
    }
  ];

  const patitionsNoUser = [
    {
      category: 'categoryOne',
      city: 'Sofia',
      country: 'Bulgaria',
      creationDate: '09/08/17',
      creator: 'creatorOne',
      deliverTo: 'deliverOne',
      editorsChoice: true,
      featured: true,
      goal: 10,
      longDescription: 'longOne',
      name: 'nameOne',
      shortDescription: 'shortOne',
      signupUsers: ['pencho@test.com'],
      $key: 0
    }
  ];

  const validUser = {
    email: 'kalin@test.com'
  };

  beforeEach(async(() => {

    const firebaseAuthServiceStub = {
      login: jasmine.createSpy('login').and.returnValue(true)
    };

    const firebasePetitionServiceStub = {
      getPetitions: jasmine.createSpy('getPetitions').and.returnValue(true)
    };

    TestBed.configureTestingModule({
      declarations: [UserComponent],
      providers: [
        { provide: FirebasePetitionService, useClass: DataStub },
        { provide: FirebaseAuthService, useClass: AuthStub }
      ],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;

    authService = TestBed.get(FirebaseAuthService);
    firebaseService = TestBed.get(FirebasePetitionService);
    de = fixture.debugElement;

  });

  it('Should create component', () => {

    const spy = spyOn(firebaseService, 'getPetitions').and.returnValue(
      Observable.of(patitionsIncludeUser)
    );

    const spyTwo = spyOn(authService, 'getUser').and.returnValue(
      Observable.of(validUser)
    );
    component.ngOnInit();
    expect(component).toBeTruthy();
  });

  it('Should call getPetitions from firebase service', () => {

    const spy = spyOn(firebaseService, 'getPetitions').and.returnValue(
      Observable.of(patitionsIncludeUser)
    );

    const spyTwo = spyOn(authService, 'getUser').and.returnValue(
      Observable.of(validUser)
    );
    component.ngOnInit();
    expect(spy.calls.count()).toEqual(1);
  });

  it('Should call getUser from auth service', () => {

    const spy = spyOn(firebaseService, 'getPetitions').and.returnValue(
      Observable.of(patitionsIncludeUser)
    );

    const spyTwo = spyOn(authService, 'getUser').and.returnValue(
      Observable.of(validUser)
    );
    component.ngOnInit();
    expect(spyTwo.calls.count()).toEqual(1);
  });

  it('Should display correct email in the welcome message', () => {

    const spy = spyOn(firebaseService, 'getPetitions').and.returnValue(
      Observable.of(patitionsIncludeUser)
    );

    const spyTwo = spyOn(authService, 'getUser').and.returnValue(
      Observable.of(validUser)
    );
    component.ngOnInit();
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const el = fixture.debugElement.query(By.css('h1')).nativeElement;
      const content = el.textContent;
      expect(content).toContain(validUser.email);
    });
  });

  it('Should display correct petition name', () => {

    const spy = spyOn(firebaseService, 'getPetitions').and.returnValue(
      Observable.of(patitionsIncludeUser)
    );

    const spyTwo = spyOn(authService, 'getUser').and.returnValue(
      Observable.of(validUser)
    );
    component.ngOnInit();
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const el = fixture.debugElement.query(By.css('.card-title')).nativeElement;
      const content = el.textContent;
      expect(content).toContain(patitionsIncludeUser[0].name);
    });
  });

  it('Should display correct petition goal', () => {

    const spy = spyOn(firebaseService, 'getPetitions').and.returnValue(
      Observable.of(patitionsIncludeUser)
    );

    const spyTwo = spyOn(authService, 'getUser').and.returnValue(
      Observable.of(validUser)
    );
    component.ngOnInit();
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const el = fixture.debugElement.query(By.css('#pet-goal')).nativeElement;
      const content = el.textContent;
      expect(content).toContain(patitionsIncludeUser[0].goal);
    });
  });

  it('Should display correct progress bar length', () => {

    const spy = spyOn(firebaseService, 'getPetitions').and.returnValue(
      Observable.of(patitionsIncludeUser)
    );

    const spyTwo = spyOn(authService, 'getUser').and.returnValue(
      Observable.of(validUser)
    );
    component.ngOnInit();
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const el = fixture.debugElement.query(By.css('.progress-bar')).nativeElement;
      const content = el.textContent;
      expect(content).toContain(patitionsIncludeUser[0].signupUsers.length);
    });
  });

  it('Should display correct petition creator', () => {

    const spy = spyOn(firebaseService, 'getPetitions').and.returnValue(
      Observable.of(patitionsIncludeUser)
    );

    const spyTwo = spyOn(authService, 'getUser').and.returnValue(
      Observable.of(validUser)
    );
    component.ngOnInit();
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const el = fixture.debugElement.query(By.css('#pet-creator')).nativeElement;
      const content = el.textContent;
      expect(content).toContain(patitionsIncludeUser[0].creator);
    });
  });

  it('Should display correct petition deliver', () => {

    const spy = spyOn(firebaseService, 'getPetitions').and.returnValue(
      Observable.of(patitionsIncludeUser)
    );

    const spyTwo = spyOn(authService, 'getUser').and.returnValue(
      Observable.of(validUser)
    );
    component.ngOnInit();
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const el = fixture.debugElement.query(By.css('#pet-deliver')).nativeElement;
      const content = el.textContent;
      expect(content).toContain(patitionsIncludeUser[0].deliverTo);
    });
  });

  it('Should display correct petition short description', () => {

    const spy = spyOn(firebaseService, 'getPetitions').and.returnValue(
      Observable.of(patitionsIncludeUser)
    );

    const spyTwo = spyOn(authService, 'getUser').and.returnValue(
      Observable.of(validUser)
    );
    component.ngOnInit();
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const el = fixture.debugElement.query(By.css('.card-text')).nativeElement;
      const content = el.textContent;
      expect(content).toContain(patitionsIncludeUser[0].shortDescription);
    });
  });

  it('Should display correct petition sign count', () => {

    const spy = spyOn(firebaseService, 'getPetitions').and.returnValue(
      Observable.of(patitionsIncludeUser)
    );

    const spyTwo = spyOn(authService, 'getUser').and.returnValue(
      Observable.of(validUser)
    );
    component.ngOnInit();
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const el = fixture.debugElement.query(By.css('.card-footer small')).nativeElement;
      const content = el.textContent;
      expect(content).toContain(patitionsIncludeUser[0].signupUsers.length);
    });
  });

  it('Should display correct petition details link', () => {

    const spy = spyOn(firebaseService, 'getPetitions').and.returnValue(
      Observable.of(patitionsIncludeUser)
    );

    const spyTwo = spyOn(authService, 'getUser').and.returnValue(
      Observable.of(validUser)
    );
    component.ngOnInit();
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const el = fixture.debugElement.query(By.css('.btn-sm')).nativeElement.getAttribute('href');
      expect(el).toEqual('/petitions/0');
    });
  });
});
