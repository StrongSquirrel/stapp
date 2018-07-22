// @flow

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {goBack} from 'react-router-redux'
import {bindActionCreators} from 'redux'

type Props = {
    goBack: typeof goBack
}

class NotFound extends Component<Props> {

    constructor(props) {
        super(props)
    }

    render() {

        const {goBack} = this.props

        return (
            <div>
                <div className="middle">
                    <h2>404 Page not found</h2>
                    <h3 onClick={() => goBack()}>👈 back</h3>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        back: goBack
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(NotFound)

