// @flow

export const APP_CLEAR_ERRS = 'APP_CLEAR_ERRS'
export const APP_INIT_REQUEST = 'APP_INIT_REQUEST'
export const APP_INIT_SUCCESS = 'APP_INIT_SUCCESS'
export const APP_INIT_FAILURE = 'APP_INIT_FAILURE'

import type {
    Action
} from '../types/Action'
import type {
    Dispatch
} from '../types/Store'

export const appClearErrs = (): Action => {
    return {
        type: APP_CLEAR_ERRS
    }
}

const appInitRequest = (): Action => {
    return {
        type: APP_INIT_REQUEST
    }
}

const appInitSuccess = (): Action => {
    return {
        type: APP_INIT_SUCCESS
    }
}

// eslint-disable-next-line no-unused-vars
const appInitFailure = (err = 'Something went wrong') => {
    return {
        type: APP_INIT_FAILURE,
        err
    }
}

export const doAppInit = () => {
    return function (dispatch: Dispatch) {
        dispatch(appInitRequest())
        dispatch(appInitSuccess())
    }
}
