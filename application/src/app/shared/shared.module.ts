import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './error404/error404.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule, // !!!
  ],
  declarations: [
    NavbarComponent,
    FooterComponent,
    Error404Component
],
  exports:  [
    NavbarComponent,
    FooterComponent,
    Error404Component
  ]
})
export class SharedModule { }
