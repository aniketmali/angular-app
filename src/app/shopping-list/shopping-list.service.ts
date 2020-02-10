import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService{
  
  selectedIngredient = new EventEmitter<Ingredient>();
  private ingredients:Ingredient[]=[
    new Ingredient("Water","100ML")
    ,new Ingredient("Water","50ML")
    ,new Ingredient("Tea Powder","1 Tsp")
  ]

  getIngredients(){
      return this.ingredients.slice();
  }

  addIngredients(items:Ingredient){
    this.ingredients.push(items);
  }
}