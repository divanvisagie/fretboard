import React, {Component} from 'react'
import './NoteView.css'

class NoteView extends Component {
    constructor () {
        super()

        this.handleClick = this.handleClick.bind(this)
    }

    getClasses (note, focusNote) {
        const noteString = note.toString()

        if (noteString === focusNote) {
            return 'note highlight'
        }
        return 'note'
    }

    handleClick () {
        this.props.onClick(this.props.note.toString())
    }

    render () {
        return (
            <div className='NoteView'>
                <div className='note-area'>
                    <div className='string'></div>
                    <div className={this.getClasses(
                        this.props.note,
                        this.props.focusNote)}
                    onClick={this.handleClick}>
                        {this.props.note.toString()}
                    </div>
                    <div className='string'></div>
                </div>
                <div className='fret'></div>
            </div>
        )
    }
}

export default NoteView
