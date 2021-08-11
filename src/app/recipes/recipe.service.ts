import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    {
      name: 'Spaghetti Bolognese',
      description: 'This is a test',
      imagePath:
        'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      ingredients: [{ name: 'meat', amount: 1 }]
    },
    {
      name: 'Pokebowl',
      description: 'This is a test',
      imagePath:
        'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      ingredients: [
        { name: 'noodles', amount: 5 },
        { name: 'fish', amount: 1 }
      ]
    }
  ];

  getRecipes() {
    return [...this.recipes];
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }
}
