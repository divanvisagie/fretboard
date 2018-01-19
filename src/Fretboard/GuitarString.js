import React, {Component} from 'react'
import './GuitarString.css'

import _ from 'underscore'

import GuitarStringModel from '../Core/GuitarString'
import Note from '../Core/Note'

import NoteView from './NoteView'
import NutView from './NutView'

class GuitarString extends Component {
  constructor (props) {
    super(props)
    const guitarString = GuitarStringModel(
      this.props.rootNote,
      this.props.frets)
    const rootNote = Note(this.props.rootNote)
    const notes = _.range(1, this.props.frets + 1, 1).map((x) => {
      return guitarString.noteAtFret(x)
    })

    this.notes = notes
    this.rootNote = rootNote
  }

  render () {
    return (
      <div className="GuitarString">
        <NutView note={this.rootNote} />
        {this.notes.map((note, index) =>
          <NoteView note={note} key={index}/>
        )}
      </div>
    )
  }
}

export default GuitarString
