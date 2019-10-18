import { Component, OnInit } from '@angular/core';

import { Game } from '../game';
import { GamesService } from '../games.service';
import { defaultFilter, defaultSorting, defaultPageSize, pageSizes } from '../../shared/defaults';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html'
})
export class GamesListComponent implements OnInit {
  games: Game[];
  dataColumns: string[] = [
    'id',
    'name',
    'provider'
  ];
  pageSizes = pageSizes;

  pageNr: number;
  pageSize: number;
  totalPages: number;
  totalFound: number;

  filterCol: string;
  filterVal: string;
  filterStrict: boolean;
  sortCol: string;
  sortDir: string;

  constructor(
    private gamesService: GamesService,
  ) { }

  ngOnInit() {
    this.reset();
  }

  searchGames(): void {
    const find = this.gamesService.searchGames(
      this.pageNr,
      this.pageSize,
      this.filterCol,
      this.filterVal,
      this.filterStrict,
      this.sortCol,
      this.sortDir,
    );
    this.games = find.data;
    this.totalFound = find.total;
    this.totalPages = Math.ceil(this.totalFound / this.pageSize);
  }

  nextPage(): void {
    this.pageNr++;
    this.searchGames();
  }
  prevPage(): void {
    this.pageNr--; // check for disabled
    this.searchGames();
  }

  reset(): void {
    this.pageNr = 1;
    this.pageSize = defaultPageSize;
    this.filterCol = defaultFilter.column;
    this.filterVal = defaultFilter.value;
    this.filterStrict = defaultFilter.strict;
    this.sortCol = defaultSorting.column;
    this.sortDir = defaultSorting.direction;
    this.searchGames();
  }

}

