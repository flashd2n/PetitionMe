import { AuthGuardService } from './../user/auth-guard.service';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomePetitionsComponent } from './home-petitions/home-petitions.component';
import { AllPetitionsComponent } from './all-petitions/all-petitions.component';
import { NewPetitionComponent } from './new-petition/new-petition.component';
import { PetitionDetailsComponent } from './petition-details/petition-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePetitionsComponent },
  { path: 'all', component: AllPetitionsComponent },
  { path: 'new', canActivate: [AuthGuardService], component: NewPetitionComponent },
  { path: ':id', component: PetitionDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PetitonRoutingModule {

}
