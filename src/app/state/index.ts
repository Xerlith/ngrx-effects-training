import * as comparisonActions from './comparison.actions';
export { comparisonActions };

import * as fromPersons from './reducers/personComparison.reducer';
export { fromPersons };

import * as fromStarships from './reducers/starshipComparison.reducer';
export { fromStarships }

import { ActionReducerMap, MetaReducer, createFeatureSelector, createSelector } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { Person } from '../types/person.type';
import { Starship } from '../types/starship.type';



export * from './comparison.effects';

export interface State {
    personComparisonStore: fromPersons.State;
    starshipComparisonStore: fromStarships.State
}

export const reducers: ActionReducerMap<State> = {
    personComparisonStore: fromPersons.reducer,
    starshipComparisonStore: fromStarships.reducer
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

  export const getPersonCompetitionState = createFeatureSelector<fromPersons.State>(fromPersons.ComparisonStore);
  export const getStarshipCompetitionState = createFeatureSelector<fromStarships.State>(fromStarships.ComparisonStore);

  export const selectPersonCompetitors = createSelector(getPersonCompetitionState, fromPersons.getCompetitors);
  export const selectPersonWinner = createSelector(getPersonCompetitionState, fromPersons.getWinner);
  export const selectPersonScore = createSelector(getPersonCompetitionState, fromPersons.getScore);

  export const selectStarshipCompetitors = createSelector(getStarshipCompetitionState, fromStarships.getCompetitors);
  export const selectStarshipWinner = createSelector(getStarshipCompetitionState, fromStarships.getWinner);
  export const selectStarshipScore = createSelector(getStarshipCompetitionState, fromStarships.getScore);