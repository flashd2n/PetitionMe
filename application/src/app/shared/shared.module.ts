import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule // !!!
  ],
  declarations: [
    NavbarComponent,
    FooterComponent
],
  exports:  [
    NavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
