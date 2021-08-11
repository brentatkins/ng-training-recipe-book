import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientAdded = new EventEmitter();

  private ingredients: Ingredient[] = [
    { name: 'ingredient  1', amount: 20 },
    { name: '2222', amount: 1 }
  ];

  getIngredients() {
    return [...this.ingredients];
  }

  addToShoppingList(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientAdded.emit();
  }
}
