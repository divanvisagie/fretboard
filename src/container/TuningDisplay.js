import React, {Component} from 'react'
import {connect} from 'react-redux'

const TuningDisplay = ({tuning, frets}) =>
    <div>
        {tuning} Tuning,  {frets} Frets
    </div>

const mapStateToProps = (state) => {
    return {
        tuning: state.tuning.name,
        frets : state.frets
    }
}

const TuningDisplayConnector = connect(
    mapStateToProps
)(TuningDisplay)

export default TuningDisplayConnector
