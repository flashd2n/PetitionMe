import 'rxjs/add/operator/switchMap';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FirebasePetitionService } from '../firebase-petition.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { RouterModule } from '@angular/router';
import { FirebaseAuthService } from '../../user/firebase-auth.service';
@Component({
  selector: 'app-petition-details',
  templateUrl: './petition-details.component.html',
  styleUrls: ['./petition-details.component.css']
})
export class PetitionDetailsComponent implements OnInit, OnDestroy {
  petitions: any;
  id: number;
  signupUsers: any;
  private sub: any;
  userEmail: any;

  constructor(
    private route: ActivatedRoute,
    private petitionService: FirebasePetitionService,
    public authService: FirebaseAuthService
  ) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.petitionService.getPetitions()
      .subscribe(petitions => {
        // console.log(petitions); // object
        // console.log(this.id);
        this.petitions = petitions.filter(x => (x.$key) === this.id);
        this.signupUsers = this.petitions[0].signupUsers;
        console.log(this.petitions);
        console.log(this.signupUsers);

        this.authService.user.subscribe(user => {
          if (user) {
            this.userEmail = user.email;
          }

        });
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  addUserBtnClick() {
    // console.log(this.userEmail);
    this.signupUsers.push(this.userEmail);
    // this.petitionService.putNewSignup(this.userEmail);
  }

}


