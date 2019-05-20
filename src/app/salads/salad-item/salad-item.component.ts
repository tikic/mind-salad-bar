import { Component, OnInit } from '@angular/core';
import {Salad} from '../salad.model';
import {SaladsService} from '../salads.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-salad-item',
  templateUrl: './salad-item.component.html',
  styleUrls: ['./salad-item.component.scss']
})
export class SaladItemComponent implements OnInit {

// ***** Fields ***** //

    // Salad Data
    salad: Salad = {};

    // ***** Lifecycle ***** //

    constructor(private saladService: SaladsService,
                private router: Router) {
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
        return !this.salad.name ||
                !this.salad.tag;
    }


    addSalad() {
        this.saladService.addSalad(this.salad).subscribe(() =>  this.router.navigate(['salad/all']));
    }

}
