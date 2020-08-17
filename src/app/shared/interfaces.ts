import { Ingredient } from '../models/ingredient.model';

export interface EditData {
    name: string;
    description: string;
    ingredient: Ingredient[];
    imageurl: string;
  }