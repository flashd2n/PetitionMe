import 'rxjs/add/operator/switchMap';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FirebasePetitionService } from '../firebase-petition.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-petition-details',
  templateUrl: './petition-details.component.html',
  styleUrls: ['./petition-details.component.css']
})
export class PetitionDetailsComponent { // implements OnInit, OnDestroy
  petitions: any;

  id: number;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private petitionService: FirebasePetitionService,
  ) {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
    });

    this.petitionService.getPetitions()
      .subscribe(petitions => {
        console.log(petitions); // object
        console.log(this.id);
        this.petitions = petitions.filter(x => +(x.$key) === this.id);
      });
  }

//  ngOnInit() {
//    this.sub = this.route.params.subscribe(params => {
//      this.id = +params['id']; // (+) converts string 'id' to a number
//
//      // In a real app: dispatch action to load the details here.
//    });
//  }
//
//  ngOnDestroy() {
//    this.sub.unsubscribe();
//  }
}
