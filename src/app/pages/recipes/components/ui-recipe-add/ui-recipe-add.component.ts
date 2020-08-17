import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { Ingredient } from 'src/app/models/ingredient.model';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-ui-recipe-add',
  templateUrl: './ui-recipe-add.component.html',
  styleUrls: ['./ui-recipe-add.component.scss']
})
export class UiRecipeAddComponent implements OnInit {

  recipe: RecipeAdd = {
    name: '',
    description: '',
    ingredient: []
  };
  @Output() onaddrecipe = new EventEmitter<FormGroup>();

  addFrom: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  addIngredient(){
    const ingredientGroup = new FormGroup({
      name: new FormControl(null),
      amount: new FormControl(null)
    });
    (this.addFrom.get('ingredients') as FormArray).push(ingredientGroup);
  }


  submit(){
    this.onaddrecipe.emit(this.addFrom);
  }

  private initForm(){
    this.addFrom = new FormGroup({
      name: new FormControl(null),
      description: new FormControl(null),
      ingredients: new FormArray([]),
      imageurl: new FormControl(null)
    })
  }

  removeIngr(index: number){
    (this.addFrom.get('ingredients') as FormArray).removeAt(index);
  }

}

export interface RecipeAdd {
  name: string;
  description: string;
  ingredient: Ingredient[];
}