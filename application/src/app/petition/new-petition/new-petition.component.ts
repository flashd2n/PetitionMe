import { Component, OnInit } from '@angular/core';
import { FirebasePetitionService } from '../firebase-petition.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { FirebaseAuthService } from '../../user/firebase-auth.service';
import { ToastsManager, ToastOptions } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-new-petition',
  templateUrl: './new-petition.component.html',
  styleUrls: ['./new-petition.component.css']
})
export class NewPetitionComponent implements OnInit {
  creator: string;
  name: string;
  category: string;
  city: string;
  country: string;
  deliverTo: string;
  goal: number;
  shortDescription: string;
  longDescription: string;
  featured = false;
  signupUsers = ['admin'];
  creationDate = new Date().toISOString().slice(2, 10).replace(/-/g, '').replace(/(\d\d)(\d\d)(\d\d)/g, '$2/$3/$1');

  constructor(
    public authService: FirebaseAuthService,
    private firebaseService: FirebasePetitionService,
     private toastr: ToastsManager, private toastOpts: ToastOptions) {
      console.log(this.authService.user);
     }

  ngOnInit() {
  }

  addNewPetition() {
    // create obj
    const petition = {
      creator: this.creator,
      name: this.name,
      category: this.category,
      city: this.city,
      country: this.country,
      deliverTo: this.deliverTo,
      goal: this.goal,
      shortDescription: this.shortDescription,
      longDescription: this.longDescription,
      featured: this.featured,
      signupUsers: this.signupUsers,
      creationDate: this.creationDate
    };

    const nameRegex =  /^[a-z ,.']+$/i;

    if (petition.longDescription.length < 200) {
      this.toastr.error('Petition long description must be 200 characters long');
      return;
    }
    if (petition.shortDescription.length < 20) {
      this.toastr.error('Petition short description must be 20 characters long');
      return;
    }
    if (petition.goal < 10) {
      this.toastr.error('Your goal should be at least 10 subscriptions');
      return;
    }
    if (petition.country.length < 3) {
      this.toastr.error('Country name should be a string');
      return;
    }
    if (petition.city.length < 2) {
      this.toastr.error('City name should be a string');
      return;
    }
    if (petition.category.length < 3) {
      this.toastr.error('Category name should be a string');
      return;
    }
    if (petition.name.length < 10) {
      this.toastr.error('Category name should be a string');
      return;
    }
    if (!nameRegex.test(petition.name)) {
      this.toastr.error('Invalid name');
    }
    if (!nameRegex.test(petition.deliverTo)) {
      this.toastr.error('Invalid person to deliver to');
    }

    this.firebaseService.addPetition(petition);
  }

}
