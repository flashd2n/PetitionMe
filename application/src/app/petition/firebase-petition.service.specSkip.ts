/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FirebasePetitionService } from './firebase-petition.service';

describe('Service: FirebasePetition', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirebasePetitionService]
    });
  });

  it('should ...', inject([FirebasePetitionService], (service: FirebasePetitionService) => {
    expect(service).toBeTruthy();
  }));
});
