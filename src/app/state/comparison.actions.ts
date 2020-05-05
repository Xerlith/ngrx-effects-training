import { Action, Store } from '@ngrx/store';

import { CompareTypes } from '../types/enums';
import { Person } from '../types/person.type';
import { Starship } from '../types/starship.type';

export const COMPARE_REQUEST = '[Request] compare';

export const COMPARE_PEOPLE = '[People] compare';
export const COMPARE_PEOPLE_RESULT = '[People] result';
export const INCREMENT_PEOPLE_SCORE = '[People] tally'

export const COMPARE_STARSHIPS = '[Starships] compare';
export const COMPARE_STARSHIPS_RESULT = '[Starships] result';
export const INCREMENT_STARSHIP_SCORE = '[Starships] tally'


export class CompareAction implements Action {
    readonly type = COMPARE_REQUEST;
    
    constructor(public payload: CompareTypes) {};
}

// People 

export class ComparePeopleAction implements Action {
    readonly type = COMPARE_PEOPLE;

    constructor(public payload: Person[]) {};
}

export class ComparePeopleResultAction implements Action {
    readonly type = COMPARE_PEOPLE_RESULT;

    constructor(public payload: number) {};
}

// Starships

export class CompareStarshipsAction implements Action {
    readonly type = COMPARE_STARSHIPS;

    constructor(public payload: Starship[]) {};
}

export class CompareStarshipsResultAction implements Action {
    readonly type = COMPARE_STARSHIPS_RESULT;

    constructor(public payload: number) {};
}

export type Actions
    = CompareAction 
    | ComparePeopleResultAction
    | CompareStarshipsResultAction
    | ComparePeopleAction
    | CompareStarshipsAction;