import { Component, OnInit, ViewChild, EventEmitter, Output, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {
  }
  @ViewChild('nameInput',null) name:ElementRef;
  @ViewChild('quantityInput',null) quantity:ElementRef;
  
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  
  onAddItem(){

    const inName = this.name.nativeElement.value;
    const inQuantity = this.quantity.nativeElement.value
    const newIngredient = new Ingredient(inName,inQuantity);

    this.ingredientAdded.emit(newIngredient);

  }
  onDeleteItem(){

  }

}
