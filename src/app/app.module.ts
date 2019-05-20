import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {IngredientsComponent} from './ingredients/ingredients.component';
import {IngredientsListComponent} from './ingredients/ingredients-list/ingredients-list.component';
import {IngredientsDetailComponent} from './ingredients/ingredients-detail/ingredients-detail.component';
import {IngredientsItemComponent} from './ingredients/ingredients-item/ingredients-item.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {IngredientsService} from './ingredients/ingredients.service';
import { SaladsComponent } from './salads/salads.component';
import {SaladsService} from './salads/salads.service';
import { SaladListComponent } from './salads/salad-list/salad-list.component';

import { SharedModule } from './shared/shared.module';
import {FormsModule} from '@angular/forms';
import { SaladDetailComponent } from './salads/salad-detail/salad-detail.component';
import { SaladItemComponent } from './salads/salad-item/salad-item.component';



@NgModule({
    declarations: [
        AppComponent,
        IngredientsComponent,
        IngredientsListComponent,
        IngredientsDetailComponent,
        IngredientsItemComponent,
        SaladsComponent,
        SaladListComponent,
        SaladDetailComponent,
        SaladItemComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        SharedModule
    ],
    providers: [IngredientsService, SaladsService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
