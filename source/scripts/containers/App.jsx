// @flow

import {bindActionCreators} from 'redux'
import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import {connect} from 'react-redux'
import Load from '../components/Load'
import Error from '../components/Error'
import {hot} from 'react-hot-loader'
import {
    doAppInit
} from '../actions/app'

import type {Error as ErrorType} from '../types/Error'

type Props = {
    doAppInit: typeof doAppInit,
    isLoading: boolean,
    err: ErrorType,
    route: any
}

class App extends Component<Props> {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.doAppInit()
    }

    render() {
        const {isLoading, route, err} = this.props
        if (err) {return <Error err={err}/>}
        return isLoading ? <Load/> : renderRoutes(route.routes)
    }

}

function mapStateToProps(state) {
    return {
        isLoading: state.app.isLoading,
        err: state.app.err
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        doAppInit
    }, dispatch)
}

export default hot(module)(withRouter(connect(mapStateToProps, mapDispatchToProps)(App)))
