import React, { Component } from 'react'

import './NutView.css'

class NutView extends Component {
    constructor () {
        super()

        this.handleClick = this.handleClick.bind(this)
    }

    getClasses (note, selectedNotes, string) {
        if (string !== undefined && selectedNotes) {
            const notesOnThisString = selectedNotes.filter(x => {
                return x.string === string && x.note === note.toString()
            })
            if (notesOnThisString.length > 0) {
                return `NutView-highlight-selected-note`
            }
        }
        return ''
    }

    handleClick () {
        const { note } = this.props
        this.props.onClick(note.toString())
    }

    render () {
        const { note, selectedNotes, string } = this.props
        return (
            <div className='NutView'>
                <span className={this.getClasses(note, selectedNotes, string)}
                    onClick={this.handleClick}>
                    {note.toString()}
                </span>
            </div>
        )
    }
}

export default NutView
