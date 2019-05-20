import {Ingredient, Tag} from '../ingredients/ingredient.model';

export interface Salad {
    name?: string;
    tag?: Tag;
    calories?: number;
    ingredients?: Ingredient[];
}