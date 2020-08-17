import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from 'src/app/models/recipe.model';
import { FormGroup } from '@angular/forms';
import { Ingredient } from 'src/app/models/ingredient.model';
import { EditData } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {

  recipe: Recipe;
  constructor(private route: ActivatedRoute, private recipeServ: RecipeService) { }

  ngOnInit(): void {

    this.route.params
      .subscribe(
        (param: Params) => {
          this.recipe = this.recipeServ.getRecipe(+param.id);
        }
      )
  }

  onEdit(data: FormGroup){
    const editedData: EditData = {
      name: data.value.name,
      description: data.value.description,
      ingredient: data.value.ingredients,
      imageurl: data.value.imageurl
    }
    this.recipeServ.edit(this.route.snapshot.params.id, editedData)
  }

}

