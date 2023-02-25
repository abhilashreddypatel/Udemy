import { Component, Input, OnInit } from '@angular/core';
import { Recipee } from '../recipee.model';

@Component({
  selector: 'app-recipee-details',
  templateUrl: './recipee-details.component.html',
  styleUrls: ['./recipee-details.component.css'],
})
export class RecipeeDetailsComponent implements OnInit {
  @Input() recipe: Recipee;
  constructor() {}

  ngOnInit() {}
}
