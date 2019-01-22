import React, {Component} from 'react'
import './NoteView.css'

function getClasses (note, focusNote) {
    const noteString = note.toString()

    if (noteString === focusNote) {
        return 'note highlight'
    }
    return 'note'
}

const NoteDisplay = ({note, focusNote, onClick}) => (
    <div className={getClasses(note, focusNote)}
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
        const { note, focusNote } = this.props
        return (
            <div className='NoteView'>
                <div className='note-area'>
                    <div className='string'></div>
                    <NoteDisplay
                        note={note}
                        focusNote={focusNote}
                        onClick={this.handleClick}
                    />
                    <div className='string'></div>
                </div>
                <div className='fret'></div>
            </div>
        )
    }
}
