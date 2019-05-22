import {Component, OnInit} from '@angular/core';
import {SaladsService} from '../salads.service';
import {Salad} from '../salad.model';

@Component({
    selector: 'app-salad-list',
    templateUrl: './salad-list.component.html',
    styleUrls: ['./salad-list.component.scss']
})
export class SaladListComponent implements OnInit {
    // ***** Fields ***** //

    // Salads Data
    salads: Salad[];

    // Sort
    sortOption: string;

    // Sort order
    ascSort = true;

    // ***** Lifecycle ***** //

    constructor(private saladsService: SaladsService) {
    }

    ngOnInit() {
        this.saladsService.fetchSalads().subscribe((res) => this.salads = res);
    }

    sortBy(option: string) {
        this.sortOption = option;
    }

    removeSalad(id, index) {
        this.saladsService.deleteIngredientData(id).subscribe(() => this.salads.splice(index, 1));
    }
}
