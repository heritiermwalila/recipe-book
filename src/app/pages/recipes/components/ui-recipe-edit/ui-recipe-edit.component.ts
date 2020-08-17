import { Component, OnInit, Input, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { NgForm, FormControl, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-ui-recipe-edit',
  templateUrl: './ui-recipe-edit.component.html',
  styleUrls: ['./ui-recipe-edit.component.scss']
})
export class UiRecipeEditComponent implements OnInit, AfterViewInit {


  @Input() recipe: Recipe;
  @Output() oneditsubmit = new EventEmitter<FormGroup>();

  editFrom: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.editFrom = new FormGroup({
      name: new FormControl(null),
      description: new FormControl(null),
      ingredients: new FormArray([]),
      imageurl: new FormControl()
    });
    this.initForm()
  }
  onSave(){
    this.oneditsubmit.emit(this.editFrom);
  }

  ngAfterViewInit(){
  }

  private initForm(){
    this.editFrom.patchValue({
      name: this.recipe.name,
      description: this.recipe.description,
      imageurl: this.recipe.image
    });

    this.recipe.ingredient.map((ing, index) => {
        (this.editFrom.get('ingredients') as FormArray).push(
          new FormGroup({
            name: new FormControl(ing.name),
            amount: new FormControl(ing.amount)
          })
        )
    })

  }

  removeIng(index: number){
    (this.editFrom.get('ingredients') as FormArray).removeAt(index)
  }

  addIng(){
    (this.editFrom.get('ingredients') as FormArray).push(
      new FormGroup({
        name: new FormControl(null),
        amount: new FormControl(null),
      })
    )
  }


}
