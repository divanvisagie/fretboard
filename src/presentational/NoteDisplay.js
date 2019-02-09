import React from 'react'
import {Button} from 'reactstrap'

import './NoteDisplay.scss'

export function getColor ({note, focusNote, string, selectedNotes, scaleNotes}) {
    const noteString = note.toString()

    if (string !== undefined && selectedNotes) {
        const notesOnThisString = selectedNotes.filter(x => {
            return x.string === string && x.note === note.toString()
        })
        if (notesOnThisString.length > 0) {
            return 'danger'
        }
    }

    if (noteString === focusNote) {
        return `success`
    }

    if (scaleNotes) {
        const notes = scaleNotes
        const isScaleNote = notes.includes(noteString)

        if (isScaleNote) {
            return `info`
        }
    }

    return ''
}

export const NoteDisplay = ({note, focusNote, onClick, scale = [], string = 0, selectedNotes = [], scaleNotes = []}) => (
    <div className='NoteDisplay'
        onClick={onClick}>
        <Button color={getColor({note, focusNote, string, selectedNotes, scaleNotes})}>
            {note.toString()}
        </Button>
    </div>
)
