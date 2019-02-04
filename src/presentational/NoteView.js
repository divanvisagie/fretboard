import React, {Component} from 'react'
import './NoteView.css'
import {Scale} from '../core/Scale'

function getClasses ({note, focusNote, scale, string, selectedNotes, scaleNotes}) {
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

    if (scaleNotes) {
        const notes = scaleNotes
        const isScaleNote = notes.includes(noteString)

        if (isScaleNote) {
            return `${className} highlight-scale-note`
        }
    }

    return className
}

const NoteDisplay = ({note, focusNote, onClick, scale, string, selectedNotes, scaleNotes}) => (
    <div className={getClasses({note, focusNote, scale, string, selectedNotes, scaleNotes})}
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
