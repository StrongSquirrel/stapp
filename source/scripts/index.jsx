import '../styles/index.css'

import React from 'react'
import routes from './routes'
import {configureStore} from './store/configureStore'
import {Provider} from 'react-redux'
import {AppContainer} from 'react-hot-loader'
import {hydrate} from 'react-dom'
import {ConnectedRouter} from 'react-router-redux'
import {renderRoutes} from 'react-router-config'
import createHistory from 'history/createBrowserHistory'

const initialState = window.__INITIAL_STATE__
const history = createHistory()
const store = configureStore(history, initialState)

const render = (r) =>
    hydrate(
        <AppContainer>
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    {renderRoutes(r)}
                </ConnectedRouter>
            </Provider>
        </AppContainer>, document.getElementById('strsqr')
    )
    
render(routes)

if (module.hot) {
    module.hot.accept('./routes', () => {
        try {
            const nextRoutes = require('./routes').default
            render(nextRoutes)
        } catch (error) {
            // eslint-disable-next-line
            console.error(`==> 😭  Routes hot reloading error ${error}`)
        }
    })
}
