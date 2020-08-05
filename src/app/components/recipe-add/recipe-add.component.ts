import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Recipe } from 'src/app/shared/recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-form-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.scss']
})
export class RecipeAddFormComponent implements OnInit {

  @Output() onsubmitdata = new EventEmitter<Recipe>();

  @ViewChild('name') name: ElementRef;
  // name: string;
  @ViewChild('description') description: ElementRef;
  @ViewChild('ingredientName') ingredientName: ElementRef;
  @ViewChild('ingredientAmount') ingredientAmount: ElementRef;

  ingredients: Ingredient[] = [];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
   
  }

  addIngredient(){
    this.ingredients.push(
      new Ingredient(
        this.ingredientName.nativeElement.value,
        +this.ingredientAmount.nativeElement.value
        ));

    this.ingredientName.nativeElement.value = '';
    this.ingredientAmount.nativeElement.value = '';
  }

  submit(){
    this.onsubmitdata.emit(
      new Recipe(
        this.name.nativeElement.value,
        this.description.nativeElement.value,
        this.ingredients
      )
    )
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  cancel(){

  }


}
