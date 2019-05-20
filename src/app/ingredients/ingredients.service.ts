import {Ingredient} from './ingredient.model';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { environment } from '../../environments/environment';

const CONNECTIONS_ENDPOINT = `${environment.apiBaseUrl}/ingredient`;

@Injectable()
export class IngredientsService {
    constructor(private httpClient: HttpClient) {
    }

    fetchIngredientData(id) {
        return this.httpClient.get<Ingredient>(`${CONNECTIONS_ENDPOINT}/${id}`);
    }

    fetchIngredientsData() {
        return this.httpClient.get<Ingredient[]>(`${CONNECTIONS_ENDPOINT}`);
    }

    addIngredient(ingredientData) {
        return this.httpClient.post<Ingredient>(`${CONNECTIONS_ENDPOINT}`, ingredientData);
    }

    setIngredientData(ingredientData) {
        return this.httpClient.put<Ingredient>(`${CONNECTIONS_ENDPOINT}/${ingredientData.id}`, ingredientData);
    }

    deleteIngredientData(id) {
        return this.httpClient.delete<Ingredient>(`${CONNECTIONS_ENDPOINT}/${id}`);
    }
}