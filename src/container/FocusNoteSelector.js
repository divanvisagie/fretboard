import {connect} from 'react-redux'
import React, {Fragment} from 'react'

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

const KeySelectorComponent = ({focusNote, handleFocusNoteChange}) =>
    <Fragment>
        <span htmlFor="tuning">Focus Note</span>
        <select
            value={focusNote}
            onChange={handleFocusNoteChange}>
            {notes.map((x, key) =>
                <option value={x} key={key}>{x}</option>
            )}
        </select>
    </Fragment>

const FocusNoteSelector = connect(
    mapStateToProps,
    mapDispatchToProps
)(KeySelectorComponent)

export default FocusNoteSelector
