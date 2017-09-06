import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from '../../user/firebase-auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authService: FirebaseAuthService) { }

  ngOnInit() {
  }

}
