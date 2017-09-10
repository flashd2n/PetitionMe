import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-petition',
  templateUrl: './single-petition.component.html',
  styleUrls: ['../home-petitions/home-petitions.component.css']
})
export class SinglePetitionComponent implements OnInit {
  @Input() petition: any;

  constructor() { }

  ngOnInit() {
  }

}
