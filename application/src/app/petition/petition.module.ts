import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PetitonRoutingModule } from './petition-routing.module';

import { AuthGuardService } from './../user/auth-guard.service';

import { AllPetitionsComponent } from './all-petitions/all-petitions.component';
import { HomeJumbotronComponent } from './home-jumbotron/home-jumbotron.component';
import { HomePetitionsComponent } from './home-petitions/home-petitions.component';
import { NewPetitionComponent } from './new-petition/new-petition.component';
import { PetitionDetailsComponent } from './petition-details/petition-details.component';
import { SinglePetitionComponent } from './single-petition/single-petition.component';

import { PetitionProgressbarDirective } from './directives/petition-progressbar.directive';
import { HighlightDirective } from './directives/high-light-petition.directive';

import { OrderByDatePipe } from './pipes/orderByDate.pipe';
import { OrderBySignupsPipe } from './pipes/orderBySignups.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PetitonRoutingModule,
  ],
  declarations: [
    AllPetitionsComponent,
    HomeJumbotronComponent,
    HomePetitionsComponent,
    NewPetitionComponent,
    PetitionDetailsComponent,
    SinglePetitionComponent,

    HighlightDirective,
    PetitionProgressbarDirective,

    OrderByDatePipe,
    OrderBySignupsPipe
  ],
  exports:  [
    AllPetitionsComponent,
    NewPetitionComponent,
    PetitionDetailsComponent
  ],
  providers: [AuthGuardService]
})

export class PetitionModule { }
