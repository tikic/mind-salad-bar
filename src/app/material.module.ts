import {NgModule} from '@angular/core';

import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule, MatToolbarModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
    imports: [
        MatInputModule,
        MatChipsModule,
        MatIconModule,
        MatFormFieldModule,
        MatButtonModule,
        MatTableModule,
        MatCardModule,
        MatListModule,
        MatSelectModule,
        MatToolbarModule],
    exports: [
        MatInputModule,
        MatChipsModule,
        MatIconModule,
        MatFormFieldModule,
        MatButtonModule,
        MatTableModule,
        MatCardModule,
        MatListModule,
        MatSelectModule,
        MatToolbarModule,
    ]
})

export class MaterialModule {
}