import React from 'react'
import {connect} from 'react-redux'

const Settings = ({handleFretsChange, frets}) =>
    <input type="number"
        label="Frets"
        onChange={handleFretsChange}
        value={frets}
        margin="normal"
        min={12} />

const mapStateToProps = (state) => {
    return {
        frets: state.frets
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleFretsChange (event) {
            dispatch({
                type : 'SET_FRETS',
                value: event.target.value
            })
        }
    }
}

const SettingsConnector = connect(
    mapStateToProps,
    mapDispatchToProps
)(Settings)

export default SettingsConnector
