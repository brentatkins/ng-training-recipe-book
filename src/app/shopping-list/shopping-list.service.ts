import { Ingredient } from '../shared/ingredient.model';
import { Observable, Subject } from 'rxjs';

export class ShoppingListService {
  private ingredientAdded = new Subject<void>();
  ingredientAdded$: Observable<void> = this.ingredientAdded;

  private ingredients: Ingredient[] = [
    { name: 'ingredient  1', amount: 20 },
    { name: '2222', amount: 1 }
  ];

  getIngredients() {
    return [...this.ingredients];
  }

  addToShoppingList(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientAdded.next();
  }
}
