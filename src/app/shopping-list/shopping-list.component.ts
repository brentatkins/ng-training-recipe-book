import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  private onDestroy$ = new Subject<void>();
  ingredients: Ingredient[] = [];

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.shoppingListService.ingredientAdded$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(() => this.loadIngredients());

    this.loadIngredients();
  }

  ngOnDestroy() {
    this.onDestroy$.next();
  }

  private loadIngredients() {
    this.ingredients = this.shoppingListService.getIngredients();
  }
}
