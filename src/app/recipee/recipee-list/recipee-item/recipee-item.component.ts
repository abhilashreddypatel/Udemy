import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipee } from '../../recipee.model';

@Component({
  selector: 'app-recipee-item',
  templateUrl: './recipee-item.component.html',
  styleUrls: ['./recipee-item.component.css'],
})
export class RecipeeItemComponent implements OnInit {
  @Input() recipees: Recipee;
  @Output() selection = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onSelection() {
    this.selection.emit();
  }
}
