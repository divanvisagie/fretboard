import React, {Component} from 'react'
import './NoteView.css'
import {connect} from 'react-redux'

function getClasses ({note, focusNote, string, selectedNotes, scaleNotes}) {
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
