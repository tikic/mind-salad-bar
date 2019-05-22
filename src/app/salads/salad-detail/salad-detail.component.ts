import {Component, OnInit} from '@angular/core';
import {SaladsService} from '../salads.service';
import {Salad} from '../salad.model';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-salad-detail',
    templateUrl: './salad-detail.component.html',
    styleUrls: ['./salad-detail.component.scss']
})
export class SaladDetailComponent implements OnInit {


    // ***** Fields ***** //

    // Salad Data
    salad: Salad = {};


    // ***** Lifecycle ***** //

    constructor(private saladsService: SaladsService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.saladsService.fetchSaladData(this.route.snapshot.params['id']).subscribe(res => this.salad = res);
    }
}
