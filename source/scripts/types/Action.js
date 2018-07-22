// @flow

// React-redux-router actions

export type ReactReduxRouterLocationChange = {
    type: '@@router/LOCATION_CHANGE'
}

// App Init actions
export type AppClearErrs = {
    type: 'APP_CLEAR_ERRS'
}

export type AppInitRequest = {
    type: 'APP_INIT_REQUEST'
}

export type AppInitSuccess = {
    type: 'APP_INIT_SUCCESS'
}

export type AppInitFailure = {
    type: 'APP_INIT_FAILURE',
    err: Error
}

// Combined Action type

export type Action =
    | AppClearErrs
    | AppInitRequest
    | AppInitSuccess
    | AppInitFailure
    | ReactReduxRouterLocationChange
