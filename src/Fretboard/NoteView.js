import React, {Component} from 'react'
import './NoteView.css'

class NoteView extends Component {
  getClasses (note, focusNote) {
    const noteString = note.toString()

    if (noteString === focusNote) {
      return 'note highlight'
    }
    return 'note'
  }

  render () {
    return (
      <div className='NoteView'>
        <div className='note-area'>
          <div className='string'></div>
          <div className={this.getClasses(
            this.props.note,
            this.props.focusNote)}>
            {this.props.note.toString()}
          </div>
        </div>
        <div className='fret'></div>
      </div>
    )
  }
}

export default NoteView
