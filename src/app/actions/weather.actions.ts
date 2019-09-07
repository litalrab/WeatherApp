import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Location } from '../location.model'
import { favState } from '../app.state'

// Section 2
export const ADD_LOCATION      = '[LOCATION] Add'
export const REMOVE_LOCATION    = '[LOCATION] Remove'
export const CHECLIFEXISTS_LOCATION    = '[LOCATION] CheckIfExists'

// Section 3
export class AddLocation implements Action {
    readonly type = ADD_LOCATION

    constructor(public payload: favState) {}
}

export class RemoveLocation implements Action {
    readonly type = REMOVE_LOCATION

    constructor(public payload: favState) {}
}

export class CheckIfExists implements Action {
    readonly type = CHECLIFEXISTS_LOCATION

    constructor(public payload: Location) {}
}
// Section 4
export type Actions = AddLocation | RemoveLocation | CheckIfExists