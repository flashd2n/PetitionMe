import { PetitionTooltipDirective } from './../petition-tooltip.directive';
import { HighlightDirective } from './../high-light-petition.directive';
import { HomePetitionsComponent } from './home-petitions/home-petitions.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AllPetitionsComponent } from './all-petitions/all-petitions.component';
import { PetitonRoutingModule } from './petition-routing.module';
import { NewPetitionComponent } from './new-petition/new-petition.component';
import { PetitionDetailsComponent } from './petition-details/petition-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PetitonRoutingModule,
  ],
  declarations: [
    AllPetitionsComponent,
    NewPetitionComponent,
    PetitionDetailsComponent,
    HomePetitionsComponent,
    HighlightDirective,
    PetitionTooltipDirective,
],
  exports:  [
    AllPetitionsComponent,
    NewPetitionComponent,
    PetitionDetailsComponent,
  ]
})
export class PetitionModule { }
