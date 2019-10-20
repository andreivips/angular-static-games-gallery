import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {

  MatToolbarModule,
  MatButtonToggleModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatSelectModule,
  MatCheckboxModule,
  MatExpansionModule,
  // MatGridListModule,
  // MatCardModule,
  // MatTableModule,

} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,

    MatToolbarModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatExpansionModule,

  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,

    MatToolbarModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatExpansionModule,

  ]
})
export class SharedModule { }
