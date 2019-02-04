import React, { Component } from 'react'
import { Scale } from '../core/Scale'
import { connect } from 'react-redux'

import './NutView.css'

class NutView extends Component {
    constructor () {
        super()

        this.handleClick = this.handleClick.bind(this)
    }

    getClasses ({ note, selectedNotes, string, scale, focusNote }) {
        const noteString = note.toString()

        let className = ''

        if (string !== undefined && selectedNotes) {
            const notesOnThisString = selectedNotes.filter(x => {
                return x.string === string && x.note === note.toString()
            })
            if (notesOnThisString.length > 0) {
                return `${className} highlight-selected-note`
            }
        }

        if (noteString === focusNote) {
            return `${className} highlight`
        }

        if (scale && scale) {
            const notes = Scale(focusNote, scale.sequence).noteSequence().map(n => n.toString())
            const isScaleNote = notes.includes(noteString)

            if (isScaleNote) {
                return `${className} highlight-scale-note`
            }
        }

        return className
    }

    handleClick () {
        const { note, string } = this.props
        this.props.onClick(note.toString(), string)
    }

    render () {
        const { note, selectedNotes, string, focusNote, scale } = this.props
        return (
            <div className='NutView'>
                <span className={this.getClasses({
                    note,
                    selectedNotes,
                    focusNote,
                    scale,
                    string
                })}
                onClick={this.handleClick}>
                    {note.toString()}
                </span>
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
)(NutView)

export default NoteViewConnector
