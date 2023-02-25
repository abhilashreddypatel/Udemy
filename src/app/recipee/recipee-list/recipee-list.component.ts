import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipee } from '../recipee.model';

@Component({
  selector: 'app-recipee-list',
  templateUrl: './recipee-list.component.html',
  styleUrls: ['./recipee-list.component.css'],
})
export class RecipeeListComponent implements OnInit {
  @Output() recipeewasSelcted = new EventEmitter<Recipee>();
  recipee: Recipee[] = [
    new Recipee(
      'tomatosoup',
      'tomatorecipee',
      'https://sugarspunrun.com/wp-content/uploads/2021/09/Tomato-Soup-Recipe-7-of-8.jpg'
    ),
    new Recipee(
      'Chicken-Biryani',
      'Biryani',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Biryani_of_Lahore.jpg/800px-Biryani_of_Lahore.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}

  onRecipeeSelected(recipee: Recipee) {
    this.recipeewasSelcted.emit(recipee);
  }
}
