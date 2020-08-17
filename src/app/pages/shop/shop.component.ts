import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/services/shop.service';
import { Ingredient } from 'src/app/models/ingredient.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  ingredients: Ingredient[];
  constructor(private shopServ: ShopService) { }
  tobeEdited: Ingredient;

  ngOnInit(): void {
    this.ingredients = this.shopServ.getIngredients();
    this.shopServ.addEvent
      .subscribe(
        (ings: Ingredient[]) => {
          this.ingredients = ings;
        }
      );
  }

  onAddIngredient(ing: Ingredient){
    this.shopServ.add(ing);
  }

  onRemoveIngredient(ind: {index: number}){
    this.shopServ.remove(ind.index);
  }

  onEdit(id: {index: number}){
    this.shopServ.editingStart.next(id.index);
  }

}
