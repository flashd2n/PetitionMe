import 'rxjs/add/operator/filter';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as _ from 'lodash';

const DISPLAY_COUNT = 4;

@Injectable()
export class FirebasePetitionService {

petitions: FirebaseListObservable<any[]>;

constructor(db: AngularFireDatabase) {
    this.petitions = db.list('/petitions');
  }

  getPetitions() {
    return this.petitions;
  }

  getFeaturedPetitions(petitions: any) {
    const count = this.getDisplayCount(),
          predicate = { featured: val => val === true };

    return this.getPetitionsFiltered(petitions, count, predicate);
  }

  getLatestPetitions(petitions: any) {
    const count = this.getDisplayCount(),
          sortBy = 'creationDate',
          descending = true;

    return this.getPetitionsSortedBy(petitions, count, sortBy, descending);
  }

  getBestPetitions(petitions: any) {
    const count = this.getDisplayCount(),
          sortBy = 'signupUsers',
          descending = true;

    return this.getPetitionsSortedBy(petitions, count, sortBy, descending);
  }

  private getPetitionsFiltered(from: any, count: number, predicate: object) {
    const filtered = _.filter(from, _.conforms(predicate));
    return filtered.slice(0, count);
  }

  private getPetitionsSortedBy(from: any, count: number, sortBy: string, descending: boolean) {
    const sorted = from.slice().sort((a, b) => {
      // decreases reusability and increases coupling because of length property... but what can I do?
      // TODO: propably the best walkaround is to add 'signupCount' field to petition in firebase
      if (sortBy === 'signupUsers') {

        if (a[sortBy].length > b[sortBy].length) {
          if (descending) { return -1; } else { return 1; }
        }

        if (a[sortBy].length < b[sortBy].length) {
          if (descending) { return 1; } else { return -1; }
        }

        return 0;

      } else {

        if (a[sortBy] > b[sortBy]) {
          if (descending) { return -1; } else { return 1; }
        }

        if (a[sortBy] < b[sortBy]) {
          if (descending) { return 1; } else { return -1; }
        }

        return 0;
      }

    });

    return sorted.slice(0, count);
  }

  private getDisplayCount() {
    return DISPLAY_COUNT;
  }

  addPetition(pet) {
    this.petitions.push(pet);
  }
}
