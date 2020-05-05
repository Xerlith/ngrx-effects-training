import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators'; 


import * as comparisonActions from './comparison.actions';
import { ApiRequestMakerService } from '../services/api-request-maker.service';
import { CompareTypes, PersonCompareFields, StarshipCompareFields } from '../types/enums';
import { fromStarships, fromPersons } from '.';
import { Person } from '../types/person.type';
import { Starship } from '../types/starship.type';
import { Contestant } from '../types/contestant.type';


@Injectable()
export class CompareEffects {

    constructor(
        private actions$: Actions,
        private apiRequester: ApiRequestMakerService,
        private starshipStore: Store<fromStarships.State>,
        private peropleStore: Store<fromPersons.State>
    ){}

    @Effect()
    compareRequest$ = this.actions$.pipe(
        ofType(comparisonActions.COMPARE_REQUEST),
        switchMap((action: comparisonActions.CompareAction) => {
            switch(action.payload) {
                case CompareTypes.Person: 
                    return this.apiRequester.getPeopleToCompare().pipe(
                        map(response => new comparisonActions.ComparePeopleAction(response))
                    )
                case CompareTypes.Starship:
                    return this.apiRequester.getStarshipsToCompare().pipe(
                        map(response => new comparisonActions.CompareStarshipsAction(response))
                    )
            }
        })
    )

    @Effect()
    compareStarships$ = this.actions$.pipe(
        ofType(comparisonActions.COMPARE_STARSHIPS),
        map((action: comparisonActions.CompareStarshipsAction)=> {
            const winner = this.getHigherField(action.payload, StarshipCompareFields.Crew);
            return new comparisonActions.CompareStarshipsResultAction(winner);
        })
    )

    @Effect()
    comparePeople$ = this.actions$.pipe(
        ofType(comparisonActions.COMPARE_PEOPLE),
        map((action: comparisonActions.ComparePeopleAction) => {
            const winner = this.getHigherField(action.payload, PersonCompareFields.Mass);
            return new comparisonActions.ComparePeopleResultAction(winner);
        })
    )
    
    private getHigherField<T>(items: T[], fieldToCompare: string): number {
        return this.sanitizeNum(items[0][fieldToCompare]) > this.sanitizeNum(items[1][fieldToCompare]) ? 0 : 1;
    }

    private sanitizeNum(val: string | number): number {
        return parseFloat((''+val).replace(/,/g, ''));
    }
}