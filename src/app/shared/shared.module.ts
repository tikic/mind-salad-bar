import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { SortPipe } from '../../utils/pipes/sort.pipe';
import { SearchPipe } from '../../utils/pipes/search.pipe';


@NgModule({
  declarations: [
      SearchPipe,
      SortPipe
  ],
  imports: [
    CommonModule,
      FlexLayoutModule,
      MaterialModule,
  ],
  exports: [
      SearchPipe,
      SortPipe,
      MaterialModule,
      FlexLayoutModule
  ]
})
export class SharedModule { }
