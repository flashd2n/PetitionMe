import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { PetitionModule } from './petition/petition.module';
import { UserModule } from './user/user.module';
import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // PetitionModule,
    UserModule,
    HomeModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
