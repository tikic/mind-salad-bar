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
    sortOption: string;

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

    sortBy(option: string) {
        this.sortOption = option;
    }
    remove() {
        this.ingredients = this.sortDate;
    }

    filterTag(name) {
        this.selectedTag = name;
        const sortData = this.sortDate.filter((element) => element.tags.some((subElement) => subElement.name === name));
        this.ingredients = sortData;
    }

    makeSalad() {
        this.saladService.storeIngredients(this.ingredients);
        this.router.navigate(['salads']);
    }
}