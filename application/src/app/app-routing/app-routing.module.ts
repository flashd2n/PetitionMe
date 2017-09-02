import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from '../shared/error404/error404.component';

const routes: Routes = [
  { path: '', redirectTo: 'petitions', pathMatch: 'full' },
  { path: 'petitions', loadChildren: '../petition/petition.module#PetitionModule' },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
