import { FirebaseAuthService } from './../firebase-auth.service';
import { FirebasePetitionService } from './../../petition/firebase-petition.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private petitions: any;
  private email;

  constructor(public firebaseService: FirebasePetitionService, private authService: FirebaseAuthService) {}

  ngOnInit(): void {
    this.firebaseService.getPetitions().subscribe(petitions => {

      console.log(petitions);

      this.authService.user.subscribe(user => {
        this.email = user.email;

        this.petitions = petitions.filter(x => x.signupUsers.includes(this.email));

        console.log(this.petitions);

      });

    });
  }

}
