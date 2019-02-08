import {connect} from 'react-redux'
import React, {Fragment} from 'react'

import Note, {notes} from '../core/Note'

import {NoteDisplay} from './NoteView'

import './FocusNoteSelector.css'

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

const noteObjects = notes.map(n => Note(n))

export const NoteSelector = ({focusNote, handleNoteSelected}) =>
    <div className='noselect FocusNoteSelector-notes'>
        {noteObjects.map((x, i) =>
            <NoteDisplay key={i}
                focusNote={focusNote}
                note={x}
                onClick={e => handleNoteSelected(x.toString())}/>
        )}
    </div>

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
