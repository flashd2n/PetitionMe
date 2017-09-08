import { Component, OnInit, NgModule } from '@angular/core';

import { FirebasePetitionService } from '../firebase-petition.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { OrderByDatePipe } from './orderByDate.pipe';

@Component({
  selector: 'app-all-petitions',
  templateUrl: './all-petitions.component.html',
  styleUrls: ['./all-petitions.component.css']
})
export class AllPetitionsComponent implements OnInit {
  petitions: any;
  public orderByDate: OrderByDatePipe;

  constructor( private firebaseService: FirebasePetitionService ) {
      this.firebaseService.getPetitions().subscribe(petitions => {
      // console.log(petitions);
      // console.log(typeof petitions); // object
      this.petitions = petitions;

      for (let i = 0; i < this.petitions.length; i += 1) {
        this.petitions[i].creationDate = new Date(this.petitions[i].creationDate);
      }
      // console.log(Array.isArray(petitions)); // true
    });
  }


  ngOnInit() {
  }
}
