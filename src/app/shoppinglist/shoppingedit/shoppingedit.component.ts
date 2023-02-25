import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shoppingedit',
  templateUrl: 'shoppingedit.component.html',
  styleUrls: ['shoppingedit.component.css'],
})
export class ShoppingeditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  @Output() ingredientadded = new EventEmitter<Ingredient>();

  submit(): void {
    const ingname = this.nameInputRef.nativeElement.value;
    const ingamt = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingname, ingamt);
    this.ingredientadded.emit(newIngredient);
  }
}
