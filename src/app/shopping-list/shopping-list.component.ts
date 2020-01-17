import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients:Ingredient[]=[
    new Ingredient("Water","100ML")
    ,new Ingredient("Water","50ML")
    ,new Ingredient("Tea Powder","1 Tsp")
  ]
  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(items:Ingredient){
    console.log(items);
    this.ingredients.push(items);
  }

  value:string="0";

}
