import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePetitionComponent } from './single-petition.component';

describe('SinglePetitionComponent', () => {
  let component: SinglePetitionComponent;
  let fixture: ComponentFixture<SinglePetitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePetitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
