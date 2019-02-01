import {connect} from 'react-redux'
import React, {Fragment} from 'react'

import Note, {notes} from '../core/Note'

import {NoteDisplay} from '../presentational/NoteView'

import './FocusNoteSelector.css'

const mapStateToProps = (state) => {
    return {
        focusNote: state.focusNote
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleFocusNoteChange (note) {
            dispatch({
                type : 'SET_FOCUS_NOTE',
                value: note
            })
        }
    }
}

const noteObjects = notes.map(n => Note(n))

const Component = ({focusNote, handleFocusNoteChange}) =>
    <Fragment>
        <div>Focus Note</div>
        <div className='noselect FocusNoteSelector-notes'>
            {noteObjects.map((x, i) =>
                <NoteDisplay key={i}
                    focusNote={focusNote}
                    note={x}
                    onClick={e => handleFocusNoteChange(x.toString())}/>
            )}
        </div>
    </Fragment>

const FocusNoteSelector = connect(
    mapStateToProps,
    mapDispatchToProps
)(Component)

export default FocusNoteSelector
