import { Component, OnInit } from '@angular/core';

import { FirebasePetitionService } from '../firebase-petition.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-all-petitions',
  templateUrl: './all-petitions.component.html',
  styleUrls: ['./all-petitions.component.css']
})
export class AllPetitionsComponent implements OnInit {
  petitions: any;

  constructor( private firebaseService: FirebasePetitionService ) {
      this.firebaseService.getPetitions().subscribe(petitions => {
      console.log(petitions);
      this.petitions = petitions;
    });
  }

  ngOnInit() {
  }
}
