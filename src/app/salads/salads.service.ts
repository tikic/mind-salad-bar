import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Salad} from './salad.model';
import {Ingredient} from '../ingredients/ingredient.model';
import {environment} from '../../environments/environment';

const CONNECTIONS_ENDPOINT = `${environment.apiBaseUrl}/salad`;

@Injectable()

export class SaladsService {
    chosenIngredient: Ingredient[];
    counter = 0;

    constructor(private httpClient: HttpClient) {
    }
    fetchSaladData(id) {
        return this.httpClient.get<Salad>(`${CONNECTIONS_ENDPOINT}/${id}`);
    }
    fetchSalads() {
        return this.httpClient.get<Salad[]>(`${CONNECTIONS_ENDPOINT}`);
    }
    addSalad(salad) {
        return this.httpClient.post<Salad>(`${CONNECTIONS_ENDPOINT}`, salad);
    }
    storeIngredients(ingredients) {
        this.chosenIngredient = ingredients;
    }
}