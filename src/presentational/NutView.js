import React, { Component } from 'react'
import { Scale } from '../core/Scale'

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
        const { note } = this.props
        this.props.onClick(note.toString())
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

export default NutView
