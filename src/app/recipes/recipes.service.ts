import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipesService{

    selectedRecipe = new EventEmitter<Recipe>();
    private recipes:Recipe[]=[
        new Recipe("Kadak Chai","Hot Drink","https://5.imimg.com/data5/JQ/RZ/CC/SELLER-18856673/kadak-tea-500x500.jpg")
        ,new Recipe("Masala Chai","Hot Drink","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkg390jCx0DVYkno8WvfC1BLJou-fQ5J982YfwuQxt5Ppj1xJS&s")
      ];
    
      getRecipes(){
          return this.recipes.slice();
      }
}