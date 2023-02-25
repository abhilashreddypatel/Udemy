import { Component, OnInit } from '@angular/core';
import { Recipee } from './recipee.model';

@Component({
  selector: 'app-recipee',
  templateUrl: './recipee.component.html',
  styleUrls: ['./recipee.component.css'],
})
export class RecipeeComponent implements OnInit {
  selectedrecipee: Recipee;

  constructor() {}

  ngOnInit() {}
}
