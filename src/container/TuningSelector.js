import React, { Fragment } from 'react'

import {connect} from 'react-redux'

import './TuningSelector.css'

const TuningSelector = ({tuning, handleTuningChange, tuningOptions}) =>
    <Fragment>
        <div class="TuningSelector-label">Tuning</div>
        <select
            value={tuning.name}
            onChange={handleTuningChange}
        >
            {tuningOptions.map((x, key) =>
                <option value={x} key={key}>{x}</option>
            )}
        </select>
    </Fragment>

const mapStateToProps = (state) => {
    return {
        tuningOptions: state.tuningOptions,
        tuning       : state.tuning
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleTuningChange (event) {
            dispatch({
                type: 'SET_TUNING',
                name: event.target.value
            })
        }
    }
}

const TuningSelectorConnector = connect(
    mapStateToProps,
    mapDispatchToProps
)(TuningSelector)

export default TuningSelectorConnector
