import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'

import {notes} from '../core/Note'

const mapStateToProps = (state) => {
    return {
        focusNote: state.focusNote
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleFocusNoteChange (event) {
            dispatch({
                type : 'SET_FOCUS_NOTE',
                value: event.target.value
            })
        }
    }
}

const ScaleSelectorComponent = ({focusNote, handleFocusNoteChange}) =>
    <Fragment>
        <span htmlFor="tuning">Focus Note</span>
        <select
            value={focusNote}
            onChange={handleFocusNoteChange}
        >
            {notes.map((x, key) =>
                <option value={x} key={key}>{x}</option>
            )}
        </select>
    </Fragment>

const ScaleView = connect(
    mapStateToProps,
    mapDispatchToProps
)(ScaleSelectorComponent)
export default ScaleView
