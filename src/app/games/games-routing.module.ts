import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamesListComponent } from './games-list/games-list.component';

const routes: Routes = [
  {
    path: '', // patch no SSR. TODO remove
    component: GamesListComponent,
  },
  {
    path: 'games',
    component: GamesListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }




