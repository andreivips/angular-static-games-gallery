import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Game } from './game';
import { GAMES } from './games.data';
import { SearchResult } from '../shared/interfaces';
import { defaultPageSize } from '../shared/defaults';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private games$: BehaviorSubject<Game[]> = new BehaviorSubject<Game[]>(GAMES);

  constructor() { }

  searchGames(
    pageNr: number = 1,
    pageSize: number = defaultPageSize,
    filterCol: string,
    filterVal: string,
    filterStrict: boolean,
    sortCol: string,
    sortDir: string,
  ): SearchResult<Game> {
    let total = 0;
    let data: Game[] = [];
    this.games$.pipe(
      map(
        games => games
        .filter(game => (
          filterStrict ?
            game[filterCol] === filterVal :
            game[filterCol].indexOf(filterVal) !== -1
        ))
        .sort((a: any, b: any) => (a[sortCol] - b[sortCol]))
      ),
      map(games => sortDir === 'desc' ? games.reverse() : games),
      tap(games => total = games.length),
      map(games => games.slice(
        +((pageNr - 1) * pageSize),
        +(pageSize + ((pageNr - 1) * pageSize))
      ))
    ).subscribe(games => {
      data = games;
    });

    return {
      total,
      data
    };
  }

}
