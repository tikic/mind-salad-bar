import {Component, OnInit} from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Ingredient, Tag} from '../ingredient.model';
import {IngredientsService} from '../ingredients.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-ingredients-detail',
    templateUrl: './ingredients-detail.component.html',
    styleUrls: ['./ingredients-detail.component.scss']
})
export class IngredientsDetailComponent implements OnInit {

    // ***** Fields ***** //

    // Ingredient Data
    ingredient: Ingredient;

    // Tags fields
    selectable = true;
    removable = true;
    addOnBlur = true;
    readonly separatorKeysCodes: number[] = [ENTER, COMMA];

    // ***** Lifecycle ***** //

    constructor(private ingredientsService: IngredientsService,
                private router: Router,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.ingredientsService.fetchIngredientData(this.route.snapshot.params['id']).subscribe( res => this.ingredient = res);
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
            this.ingredient.tags.length === 0;
    }

    deleteIngredientData() {
        this.ingredientsService.deleteIngredientData(this.ingredient.id).subscribe( () => this.router.navigate(['/ingredient/all']));
    }

    changeIngredientData() {
        this.ingredientsService.setIngredientData(this.ingredient).subscribe( () => this.router.navigate(['/ingredient/all']) );
    }
}
