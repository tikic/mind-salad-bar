import {Component, OnInit} from '@angular/core';
import {Salad} from '../salad.model';
import {SaladsService} from '../salads.service';
import {Router} from '@angular/router';
import {Ingredient} from '../../ingredients/ingredient.model';
import {IngredientsService} from '../../ingredients/ingredients.service';

@Component({
    selector: 'app-salad-item',
    templateUrl: './salad-item.component.html',
    styleUrls: ['./salad-item.component.scss']
})
export class SaladItemComponent implements OnInit {

// ***** Fields ***** //

    // Salad Data
    salad: Salad = {};

    // Ingredients
    ingredients: Ingredient[];

    // Ingredients Checked List
    ingredientsList = [];


    // ***** Lifecycle ***** //

    constructor(private saladService: SaladsService,
                private ingredientsService: IngredientsService,
                private router: Router) {
    }

    ngOnInit() {
        this.fetchData();
    }

    fetchData() {

        this.salad.ingredients = this.saladService.ingredientsList;
        this.ingredientsList = this.saladService.chosenIngredient;

        this.salad.calories = this.saladService.counter;

        if (this.salad.ingredients === undefined) {
            this.ingredientsService.fetchIngredientsData().subscribe((res) => {
                this.salad.ingredients = res;
            });
        }

        this.calorieCounter();
    }

    calorieCounter() {
        if (this.ingredientsList) {
            for (let i = 0; i < this.ingredientsList.length; i++) {
                this.salad.calories += this.salad.ingredients[i].calories;
            }
        }
    }

    invalidForm(): boolean {
        return !this.salad.name ||
            !this.salad.tag;
    }

    addTolist(data) {

        const updateItem = this.ingredientsList.find(this.findIndexToUpdate, data.id);
        const index = this.ingredientsList.indexOf(updateItem);

        if (index > -1) {
            this.ingredientsList.splice(index, 1);
            this.salad.calories -= data.calories;
        } else {
            this.ingredientsList.push(data);
            this.salad.calories += data.calories;
        }
    }

    findIndexToUpdate(obj) {
        return obj.id === this;
    }

    addSalad() {
        this.salad.ingredients = this.ingredientsList;
        this.saladService.addSalad(this.salad).subscribe(() => this.router.navigate(['salad/all']));
    }

}
