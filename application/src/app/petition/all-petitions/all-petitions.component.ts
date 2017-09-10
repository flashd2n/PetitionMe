import { Component, OnInit, NgModule } from '@angular/core';

import { FirebasePetitionService } from '../firebase-petition.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { OrderByDatePipe } from './../pipes/orderByDate.pipe';
import { OrderBySignupsPipe } from './../pipes/orderBySignups.pipe';

@Component({
  selector: 'app-all-petitions',
  templateUrl: './all-petitions.component.html',
  styleUrls: ['./all-petitions.component.css']
})
export class AllPetitionsComponent implements OnInit {
  petitions: any;
  byDate = true;
  bySignups = false;

  public orderByDate: OrderByDatePipe;
  public orderBySignups: OrderBySignupsPipe;

  constructor( private firebaseService: FirebasePetitionService ) {
  }


  ngOnInit() {
    this.firebaseService.getPetitions().subscribe(petitions => {
      this.petitions = petitions;

      for (let i = 0; i < this.petitions.length; i += 1) {
        this.petitions[i].creationDate = new Date(this.petitions[i].creationDate);
      }

    });
  }

  toggleDatePipe () {
    this.byDate = !this.byDate;

    if (this.byDate === true) {
      this.bySignups = false;
    }
  }

  toggleSingupsPipe () {
    this.bySignups = !this.bySignups;

    if (this.bySignups === true) {
      this.byDate = false;
    }
  }
}
