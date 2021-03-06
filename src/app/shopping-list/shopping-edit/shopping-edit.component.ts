import { Component } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  name = '';
  amount = 0;

  constructor(private shoppingListService: ShoppingListService) {}

  handleAddIngredient() {
    this.shoppingListService.addToShoppingList({
      name: this.name,
      amount: this.amount
    });
  }
}
