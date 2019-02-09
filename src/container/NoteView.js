import React, {Component} from 'react'
import './NoteView.scss'
import {connect} from 'react-redux'

import {NoteDisplay} from '../presentational/NoteDisplay';

class NoteView extends Component {
    constructor () {
        super()

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick () {
        const {note, string} = this.props
        this.props.onClick(note.toString(), string)
    }

    render () {
        const { note, focusNote, scale, string, selectedNotes, scaleNotes } = this.props
        return (
            <div className='NoteView'>
                <div className='note-area'>
                    <div className='string'></div>
                    <NoteDisplay
                        note={note}
                        scale={scale}
                        focusNote={focusNote}
                        scaleNotes={scaleNotes}
                        string={string}
                        selectedNotes={selectedNotes}
                        onClick={this.handleClick}
                    />
                    <div className='string'></div>
                </div>
                <div className='fret'></div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tuning       : state.tuning.value,
        frets        : state.frets,
        focusNote    : state.focusNote,
        scale        : state.scale,
        selectedNotes: state.selectedNotes,
        scaleNotes   : state.scaleNotes
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onClick (note, string) {
            dispatch({
                type : 'SET_SELECTED_NOTE',
                value: {
                    note,
                    string
                }
            })
        }
    }
}

const NoteViewConnector = connect(
    mapStateToProps,
    mapDispatchToProps
)(NoteView)

export default NoteViewConnector
