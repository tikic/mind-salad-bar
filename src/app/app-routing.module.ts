import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IngredientsItemComponent} from './ingredients/ingredients-item/ingredients-item.component';
import {IngredientsListComponent} from './ingredients/ingredients-list/ingredients-list.component';
import {IngredientsDetailComponent} from './ingredients/ingredients-detail/ingredients-detail.component';
import {SaladsComponent} from './salads/salads.component';
import {SaladListComponent} from './salads/salad-list/salad-list.component';
import {SaladDetailComponent} from './salads/salad-detail/salad-detail.component';
import {IngredientsComponent} from './ingredients/ingredients.component';
import {SaladItemComponent} from './salads/salad-item/salad-item.component';


const appRoutes: Routes = [
    { path: '', redirectTo: '/ingredient', pathMatch: 'full' },
    { path: 'ingredient', component: IngredientsComponent, children: [
        { path: '', component: IngredientsItemComponent },
        { path: 'all', component: IngredientsListComponent },
        { path: ':id', component: IngredientsDetailComponent },
    ] },
    { path: 'salad', component: SaladsComponent, children: [
        { path: '', component: SaladItemComponent },
        { path: 'all', component: SaladListComponent },
        { path: ':id', component: SaladDetailComponent },
    ] }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
