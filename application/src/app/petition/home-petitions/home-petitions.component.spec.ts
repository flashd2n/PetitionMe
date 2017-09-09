import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePetitionsComponent } from './home-petitions.component';

describe('HomePetitionsComponent', () => {
  let component: HomePetitionsComponent;
  let fixture: ComponentFixture<HomePetitionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePetitionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePetitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
