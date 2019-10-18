import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { GamesListComponent } from './games-list/games-list.component';

import { GamesRoutingModule } from './games-routing.module';

@NgModule({
  declarations: [
    GamesListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    GamesRoutingModule
  ]
})
export class GamesModule { }
