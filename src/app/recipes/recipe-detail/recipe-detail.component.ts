import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe?: Recipe;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private shoppingListService: ShoppingListService
  ) {}

  ngOnInit() {
    this.route.params
      .pipe(
        map((params) => +params['id']),
        map((id) => this.recipeService.getRecipe(id))
      )
      .subscribe((recipe) => (this.recipe = recipe));
  }

  sendToShoppingList() {
    this.recipe?.ingredients.forEach((x) =>
      this.shoppingListService.addToShoppingList(x)
    );
  }
}
