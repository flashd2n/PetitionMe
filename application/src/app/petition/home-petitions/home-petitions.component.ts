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

  constructor( private db: FirebasePetitionService ) { }

  ngOnInit() {
    this.db.getPetitions()
      .subscribe(petitions => {
        this.petitions = petitions;

        for (let i = 0; i < this.petitions.length; i += 1) {
          this.petitions[i].creationDate = new Date(this.petitions[i].creationDate);
        }

        this.featuredPetitions = this.db.getFeaturedPetitions(this.petitions);
        this.latestPetitions = this.db.getLatestPetitions(this.petitions);
        this.bestPetitions = this.db.getBestPetitions(this.petitions);
    });
  }
}
