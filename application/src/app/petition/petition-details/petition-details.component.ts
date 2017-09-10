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
  petition: any;
  petitions: any;
  id: any;
  signupUsers: any;
  private sub: any;
  userEmail: any;

  constructor(
    private route: ActivatedRoute,
    private db: FirebasePetitionService,
    public authService: FirebaseAuthService
  ) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.db.getPetitions()
      .subscribe(petitions => {
        this.petitions = petitions.filter(x => (x.$key) === this.id);
        this.petition = this.petitions[0];
        this.signupUsers = this.petition.signupUsers;

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
    this.db.putNewSignup(this.petition, this.id, this.userEmail);
    // console.log(this.userEmail);
    // this.signupUsers.push(this.userEmail);
    // this.petitionService.putNewSignup(this.userEmail);
  }

}


