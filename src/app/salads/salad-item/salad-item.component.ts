import { Component, OnInit } from '@angular/core';
import {Salad} from '../salad.model';
import {SaladsService} from '../salads.service';

@Component({
  selector: 'app-salad-item',
  templateUrl: './salad-item.component.html',
  styleUrls: ['./salad-item.component.scss']
})
export class SaladItemComponent implements OnInit {

// ***** Fields ***** //

    // Salad Data
    salad: Salad = {};

    // Calories counter
    caloriesCounter = 0;

    // ***** Lifecycle ***** //

    constructor(private saladService: SaladsService) {
    }

    ngOnInit() {
        this.fetchData();
    }

    fetchData() {

        this.salad.ingredients = this.saladService.chosenIngredient;
        this.salad.calories = this.saladService.counter;

        if (this.salad.ingredients) {
            for (let i = 0; i < this.salad.ingredients.length; i++) {
                this.salad.calories += this.salad.ingredients[i].calories;
            }
        }
    }

    invalidForm(): boolean {
        return !this.salad.name;
    }

    // formReset() {
    //     this.salad = {};
    // }

    addSalad() {
        this.saladService.addSalad(this.salad).subscribe();
    }

}
