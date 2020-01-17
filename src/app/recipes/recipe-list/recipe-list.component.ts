import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes:Recipe[]=[
    new Recipe("Kadak Chai","Hot Drink","https://5.imimg.com/data5/JQ/RZ/CC/SELLER-18856673/kadak-tea-500x500.jpg")
    ,new Recipe("Masala Chai","Hot Drink","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkg390jCx0DVYkno8WvfC1BLJou-fQ5J982YfwuQxt5Ppj1xJS&s")
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
