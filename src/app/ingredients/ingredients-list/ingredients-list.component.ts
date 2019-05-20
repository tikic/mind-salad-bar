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

    // Sort
    ascSort: boolean;

    sortData: any;

    //
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
        });
    }

    remove() {
        this.ingredients = this.sortData;
        this.selectedTag = '';
    }

    filterTag(name) {
        this.selectedTag = name;
        const sortData = this.sortData.filter((element) => element.tags.some((subElement) => subElement.name === name));
        this.ingredients = sortData;
    }

    makeSalad() {
        this.saladService.storeIngredients(this.ingredients);
        this.router.navigate(['salad']);
    }
}