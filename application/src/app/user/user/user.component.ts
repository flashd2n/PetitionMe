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

  public petitions: any;
  public email;

  constructor(public firebaseService: FirebasePetitionService, public authService: FirebaseAuthService) { }

  ngOnInit(): void {
    this.firebaseService.getPetitions().subscribe(petitions => {

      this.authService.getUser().subscribe(user => {
        if (user) {
          this.email = user.email;
          // console.log(user.email);
          // console.log(petitions);
          this.petitions = petitions.filter(x => x.signupUsers.includes(this.email));
        }

      });

    });
  }

}
