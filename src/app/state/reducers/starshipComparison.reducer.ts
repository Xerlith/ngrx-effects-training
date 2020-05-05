import * as comparisonActions from '../comparison.actions';
import { createFeatureSelector, createSelector, select, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { Starship } from 'src/app/types/starship.type';


export const ComparisonStore = 'starshipComparisonStore'

export interface State {
    winner: Starship;
    competitors: Starship[];
    score: number[];
}

export const initialState: State = {
    winner: null,
    competitors: [],
    score: [0,0]
}

export function reducer(state = initialState, action: comparisonActions.Actions): State {
    switch(action.type) {
        case comparisonActions.COMPARE_STARSHIPS: {
            return {
                ...state,
                competitors: action.payload
            }
        }
        case comparisonActions.COMPARE_STARSHIPS_RESULT: {
            return {
                ...state,
                winner: state.competitors[action.payload],
                score: [...state.score].map((v, i) => i == action.payload ? v+1 : v)
            }
        }
        default: 
            return state;
    }
}


export const getCompetitors = (state: State) => state.competitors;
export const getWinner = (state: State) => state.winner;
export const getScore = (state: State) => state.score;