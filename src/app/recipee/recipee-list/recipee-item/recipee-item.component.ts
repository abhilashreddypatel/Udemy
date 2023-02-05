import { Component, Input, OnInit } from '@angular/core';
import { Recipee } from '../../recipee.model';

@Component({
  selector: 'app-recipee-item',
  templateUrl: './recipee-item.component.html',
  styleUrls: ['./recipee-item.component.css']
})
export class RecipeeItemComponent implements OnInit {

 @Input() recipees:Recipee;
  constructor() { }

  ngOnInit(): void {
  }
 

}
