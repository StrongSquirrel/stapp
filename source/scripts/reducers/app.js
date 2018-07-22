// @flow

import {
    APP_CLEAR_ERRS,
    APP_INIT_SUCCESS,
    APP_INIT_FAILURE,
    APP_INIT_REQUEST
} from '../actions/app'

import type {
    Action
} from '../types/Action'
import type {
    AppState
} from '../types/State'

const initState: AppState = {
    isLoading: true,
    err: null,
}

export default function app(state: AppState = initState, action: Action) {

    switch (action.type) {

    case APP_CLEAR_ERRS:
        return {
            ...state,
            err: null,
        }

    case APP_INIT_REQUEST:
        return {
            ...state,
            isLoading: false
        }

    case APP_INIT_SUCCESS:
        return {
            ...state,
            isLoading: false
        }

    case APP_INIT_FAILURE:
        return {
            ...state,
            isLoading: false,
            err: action.err
        }

    default:
        return state
    }

}
