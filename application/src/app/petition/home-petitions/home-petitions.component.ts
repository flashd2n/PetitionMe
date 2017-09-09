import { FirebasePetitionService } from './../firebase-petition.service';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-home-petitions',
  templateUrl: './home-petitions.component.html',
  styleUrls: ['./home-petitions.component.css'],
})
export class HomePetitionsComponent implements OnInit {
  petitions: any;
  featuredPetitions: any;
  latestPetitions: any;
  bestPetitions: any;

  constructor( private firebaseService: FirebasePetitionService ) { }

  ngOnInit() {
    this.firebaseService.getPetitions()
      .subscribe(petitions => {
        this.petitions = petitions;

        for (let i = 0; i < this.petitions.length; i += 1) {
          this.petitions[i].creationDate = new Date(this.petitions[i].creationDate);
        }

        this.featuredPetitions = _.filter(this.petitions, _.conforms({featured: val => val === true}));
        this.bestPetitions = petitions.sort(this.compareSignups);
        this.latestPetitions = petitions.sort(this.compareDates);
    });
  }

  private compareDates(a, b) {
    if (a.creationDate > b.creationDate) {
      return -1;
    }

    if (a.creationDate < b.creationDate) {
      return 1;
    }

    return 0;
  }

  private compareSignups(a, b) {
    if (a.signupUsers.length > b.signupUsers.length) {
      return -1;
    }

    if (a.signupUsers.length < b.signupUsers.length) {
      return 1;
    }

    return 0;
  }
}
