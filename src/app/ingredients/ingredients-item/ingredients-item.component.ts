import {Component, OnInit} from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Ingredient, Tag} from '../ingredient.model';
import {IngredientsService} from '../ingredients.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-ingredients-item',
    templateUrl: './ingredients-item.component.html',
    styleUrls: ['./ingredients-item.component.scss']
})
export class IngredientsItemComponent implements OnInit {

    // Ingredient
    ingredient: Ingredient = {
        name: '',
        calories: null,
        imagePath: '',
        tags: []
    };

    // Tags fields

    selectable = true;
    removable = true;
    addOnBlur = true;

    allIngredient: number;

    readonly separatorKeysCodes: number[] = [ENTER, COMMA];

    constructor(private ingredientsService: IngredientsService,
                private router: Router) {
    }

    ngOnInit() {
        this.ingredientsService.fetchIngredientsData().subscribe(res => this.allIngredient = res.length);
    }

    addTag(event): void {
        const input = event.input;
        const value = event.value;

    // Add our fruit
        if ((value || '').trim()) {
            this.ingredient.tags.push({name: value.trim()});
        }

    // Reset the input value
        if (input) {
            input.value = '';
        }
    }

    removeTag(tag: Tag): void {
        const index = this.ingredient.tags.indexOf(tag);

        if (index >= 0) {
            this.ingredient.tags.splice(index, 1);
        }
    }

    invalidForm(): boolean {
        return !this.ingredient.name ||
            !this.ingredient.calories ||
            !this.ingredient.tags.length > 0;
    }

    reset() {
        this.ingredient = {};
        this.allIngredient++;
    }

    addIngredient() {
        this.ingredient.imagePath = null;
        this.ingredientsService.addIngredient(this.ingredient).subscribe(() => this.reset());
    }
}
