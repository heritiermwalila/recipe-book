import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  addEvent = new EventEmitter<Ingredient[]>();

  editingStart = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 10),
    new Ingredient('Tomato', 2)
  ];

  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  }
  add(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.addEvent.emit(this.ingredients.slice());
  }

  remove(index: number){
    this.ingredients = this.ingredients.filter((item, i) => i !== index);
    this.addEvent.emit(this.ingredients.slice());
  }

  getIngredient(index: number){
    return this.ingredients.find((item, i) => i === index);
  }

  edit(index: number, data: Ingredient){
    this.ingredients[index].name = data.name;
    this.ingredients[index].amount = data.amount;
    this.addEvent.emit(this.ingredients.slice());
  }

  addIngredients(ing: Ingredient[]){
    this.ingredients = this.ingredients.concat(ing)
    console.log(this.ingredients);
    
    this.addEvent.emit(this.ingredients.slice())
  }
}
