import React, {Component} from 'react'
import './GuitarString.css'

import _ from 'underscore'

import GuitarStringModel from '../Core/GuitarString'
import Note from '../Core/Note'

import NoteView from './NoteView'
import NutView from './NutView'

class GuitarString extends Component {
  getNotes (frets, rootNote) {
    const guitarString = GuitarStringModel(
      rootNote,
      frets)
    const notes = _.range(1, frets + 1, 1).map((x) => {
      return guitarString.noteAtFret(x)
    })

    return notes
  }

  render () {
    return (
      <div className="GuitarString">
      {this.props.frets}
        <NutView note={Note(this.props.rootNote)} />
        {this.getNotes(this.props.frets, this.props.rootNote).map((note, index) =>
          <NoteView note={note} key={index}/>
        )}
      </div>
    )
  }
}

export default GuitarString
