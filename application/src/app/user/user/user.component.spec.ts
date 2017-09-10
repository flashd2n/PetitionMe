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

describe('User Component', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let de: DebugElement;
  let authService: any;
  let firebaseService: any;

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
        {provide: FirebasePetitionService, useClass: DataStub},
        {provide: FirebaseAuthService, useClass: AuthStub}
      ]
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

  it('should create', () => {
    const validPetitions = [
      {
        category: 'categoryOne',
        city: 'Sofia',
        country: 'Bulgaria',
        creationDate: '09/08/17',
        creator: 'gosho',
        deliverTo: 'Cuki',
        editorsChoice: true,
        featured: true,
        goal: 10,
        longDescription: 'lalalalalala',
        name: 'very many awesome name',
        shortDescription: 'lala',
        signupUsers: ['kalin@test.com', 'pencho@test.com']
      }
    ];

    const spy = spyOn(firebaseService, 'getPetitions').and.returnValue(
      Observable.of(validPetitions)
    );

    const spyTwo = spyOn(authService, 'getUser').and.returnValue(
      Observable.of({email: 'kalin@test.com'})
    );
    component.ngOnInit();
    // fixture.detectChanges();
    console.log(component.petitions);
    console.log(component.email);
    expect(component).toBeTruthy();
  });


});

