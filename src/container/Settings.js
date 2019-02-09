import React from 'react'
import {connect} from 'react-redux'

import {Input} from 'reactstrap'

import './Settings.css'

const Settings = ({handleFretsChange, frets}) =>
    <Input className='Settings'
        type='number'
        label='Frets'
        onChange={handleFretsChange}
        value={frets}
        margin='normal'
        min={12} />

const mapStateToProps = (state) => {
    return ({
        frets: state.frets
    })
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleFretsChange (event) {
            dispatch({
                type : 'SET_FRETS',
                value: parseInt(event.currentTarget.value, 10)
            })
        }
    }
}

const SettingsConnector = connect(
    mapStateToProps,
    mapDispatchToProps
)(Settings)

export default SettingsConnector
