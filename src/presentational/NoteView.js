import React, {Component} from 'react'
import './NoteView.css'
import {Scale} from '../core/Scale'

function getClasses (note, focusNote, scale, string, selectedNotes) {
    const noteString = note.toString()

    let className = 'note'

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

const NoteDisplay = ({note, focusNote, onClick, scale, string, selectedNotes}) => (
    <div className={getClasses(note, focusNote, scale, string, selectedNotes)}
        onClick={onClick}>
        {note.toString()}
    </div>
)

export { NoteDisplay }

export default class NoteView extends Component {
    constructor () {
        super()

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick () {
        this.props.onClick(this.props.note.toString())
    }

    render () {
        const { note, focusNote, scale, string, selectedNotes } = this.props
        return (
            <div className='NoteView'>
                <div className='note-area'>
                    <div className='string'></div>
                    <NoteDisplay
                        note={note}
                        scale={scale}
                        focusNote={focusNote}
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
