import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {


  addRecipe = new EventEmitter<boolean>();

  constructor() { }
}
