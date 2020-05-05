import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { comparisonActions, selectPersonWinner, selectPersonCompetitors, fromPersons, selectPersonScore } from 'src/app/state';
import { CompareTypes } from 'src/app/types/enums';
import { Person } from 'src/app/types/person.type';


@Component({
  selector: 'app-person-comparator',
  templateUrl: './person-comparator.component.html',
  styleUrls: ['./person-comparator.component.scss']
})
export class PersonComparatorComponent implements OnInit {
  
  public people$: Observable<Person[]>;
  public victor$: Observable<Person>;
  public score$: Observable<number[]>;

  constructor(private store: Store<fromPersons.State>){
    this.store.dispatch(new comparisonActions.CompareAction(CompareTypes.Person));
  }

  ngOnInit(): void {
    this.people$ = this.store.pipe(select(selectPersonCompetitors));
    this.victor$ = this.store.pipe(select(selectPersonWinner));
    this.score$ = this.store.pipe(select(selectPersonScore));
  }

  public reset(): void {
    this.store.dispatch(new comparisonActions.CompareAction(CompareTypes.Person));
  }

}
