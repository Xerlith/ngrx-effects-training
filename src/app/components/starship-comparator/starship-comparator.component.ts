import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { fromStarships, comparisonActions, selectStarshipCompetitors, selectStarshipWinner, selectStarshipScore } from 'src/app/state';
import { CompareTypes } from 'src/app/types/enums';
import { Starship } from 'src/app/types/starship.type';

@Component({
  selector: 'app-starship-comparator',
  templateUrl: './starship-comparator.component.html',
  styleUrls: ['./starship-comparator.component.scss']
})
export class StarshipComparatorComponent implements OnInit {

  public starships$: Observable<Starship[]>;
  public victor$: Observable<Starship>;
  public score$: Observable<number[]>;

  constructor(private store: Store<fromStarships.State>){
    this.store.dispatch(new comparisonActions.CompareAction(CompareTypes.Starship));
  }

  ngOnInit(): void {
    this.starships$ = this.store.pipe(select(selectStarshipCompetitors));
    this.victor$ = this.store.pipe(select(selectStarshipWinner));
    this.score$ = this.store.pipe(select(selectStarshipScore));
  }

  public reset(): void {
    this.store.dispatch(new comparisonActions.CompareAction(CompareTypes.Starship));
  }

}
