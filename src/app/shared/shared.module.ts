import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // NgModel lives here

import {

  MatToolbarModule,
  MatButtonToggleModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatSelectModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatCardModule,

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
    MatCardModule,

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
    MatCardModule,

  ]
})
export class SharedModule { }
