import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../ingredient.model';
import {IngredientsService} from '../ingredients.service';
import {SaladsService} from '../../salads/salads.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-ingredients-list',
    templateUrl: './ingredients-list.component.html',
    styleUrls: ['./ingredients-list.component.scss']
})
export class IngredientsListComponent implements OnInit {
    // ***** Fields ***** //

    // Ingredients Data
    ingredients: Ingredient[];

    // Ingredients Checked List
    ingredientsList = [];

    // Sorting order
    ascSort: boolean;

    // Sort Ingredients
    sortData: Ingredient[];

    // Tag selected
    selectedTag: string;

    // ***** Lifecycle ***** //

    constructor(private ingredientsService: IngredientsService,
                private router: Router,
                private saladService: SaladsService) {
    }

    ngOnInit() {
        this.ingredientsService.fetchIngredientsData().subscribe((res) => {
            this.ingredients = res;
            this.sortData = this.ingredients;
            this.storeData();
        });
    }

    storeData() {
        this.saladService.storeIngredients(this.ingredients);
    }

    addTolist(data) {
        const updateItem = this.ingredientsList.find(this.findIndexToUpdate, data.id);
        const index = this.ingredientsList.indexOf(updateItem);
        data.checked = true;

        if (index > -1) {
            this.ingredientsList.splice(index, 1);
        } else {
            this.ingredientsList.push(data);
        }
    }

    findIndexToUpdate(obj) {
        return obj.id === this;
    }

    invalidForm(): boolean {
        return this.ingredientsList.length === 0;
    }

    removeTag() {
        this.ingredients = this.sortData;
        this.selectedTag = '';
    }

    filterTag(name) {
        this.selectedTag = name;
        this.ingredients = this.sortData.filter((element) => element.tags.some((subElement) => subElement.name === name));
    }

    makeSalad() {
        this.saladService.storeIngredients(this.ingredientsList);
        this.router.navigate(['salad']);
    }
}