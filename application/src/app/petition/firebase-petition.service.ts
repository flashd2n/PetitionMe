import 'rxjs/add/operator/filter';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FirebasePetitionService {
petitions: FirebaseListObservable<any[]>;

constructor(db: AngularFireDatabase) {
    this.petitions = db.list('/petitions');
  }

  getPetitions() {
    return this.petitions;
  }

  addPetition(pet) {
    this.petitions.push(pet);
  }
}
