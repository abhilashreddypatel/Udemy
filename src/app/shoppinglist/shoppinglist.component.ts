import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css'],
})
export class ShoppinglistComponent implements OnInit {
  ingredient: Ingredient[] = [new Ingredient('tomatos', '5')];
  constructor() {}

  ngOnInit(): void {}

  oningredientadded(ingredient: Ingredient) {
    this.ingredient.push(ingredient);
  }
}
