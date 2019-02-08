import { connect } from 'react-redux'
import React, { Fragment } from 'react'

import Note, { notes } from '../core/Note'

import './FocusNoteSelector.css'
import { NoteSelector } from '../presentational/NoteSelector'

const mapStateToProps = (state) => {
    return {
        focusNote: state.focusNote
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleNoteSelected (note) {
            dispatch({
                type : 'SET_FOCUS_NOTE',
                value: note
            })
        }
    }
}

export const noteObjects = notes.map(n => Note(n))

const Component = ({focusNote, handleNoteSelected}) =>
    <Fragment>
        <div>Focus Note</div>
        <NoteSelector focusNote={focusNote} handleNoteSelected={handleNoteSelected} />
    </Fragment>

const FocusNoteSelector = connect(
    mapStateToProps,
    mapDispatchToProps
)(Component)

export default FocusNoteSelector
