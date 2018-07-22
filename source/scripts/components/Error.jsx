// @flow

import React, {Component} from 'react'

import type {Error as ErrorType} from '../types/Error'

type Props = {
    err: ErrorType
}

class Error extends Component<Props> {

    constructor(props: Props) {
        super(props)
    }

    render() {
        const {err} = this.props
        return (
            <div>
                <div className="middle">
                    <h2>😨 Application error</h2>
                    <div>{err.message}</div>
                </div>
            </div>
        )
    }
}

export default Error
