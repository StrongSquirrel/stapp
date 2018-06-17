import {createStore, applyMiddleware, compose} from 'redux'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from '../reducers'

import {routerMiddleware} from 'react-router-redux'

export function configureStore(history, initialState = {}) {
    const router = routerMiddleware(history)
    let middlewares = [ router, thunk ]

    if (process.env.NODE_ENV !== 'production' && typeof window != 'undefined') {
        const logger = createLogger({collapsed: true, diff: true})
        middlewares.push(logger)
    }

    const store = compose(

        applyMiddleware(...middlewares)

    )(createStore)(reducers, initialState)

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers')
            store.replaceReducer(nextReducer)
        })
    }

    return store
}
