import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { Ingredient } from 'src/app/models/ingredient.model';
import { ShopService } from 'src/app/services/shop.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ui-recipe-item',
  templateUrl: './ui-recipe-item.component.html',
  styleUrls: ['./ui-recipe-item.component.scss']
})
export class UiRecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private shopServ: ShopService, private router: Router) { }

  ngOnInit(): void {
  }

  addToSho(ingr: Ingredient[]){
    this.shopServ.addIngredients(ingr);
    this.router.navigate(['/shop'])
  }

  delete(id: number){

  }

}
