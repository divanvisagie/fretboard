'use strict'

import React, {Component} from 'react'
import './GuitarString.css'

import _ from 'underscore'

import GuitarStringModel from '../Core/GuitarString'
import Note from '../Core/Note'

import NoteView from './NoteView'

class GuitarString extends Component {
  constructor (props) {
    super(props)
    const guitarString = GuitarStringModel(this.props.rootNote, this.props.frets)
    const rootNote = Note(this.props.rootNote)
    const notes = _.range(this.props.frets).map((x) => {
      const fret = parseInt(x, 10)
      return guitarString.noteAtFret(fret)
    })

    this.notes = notes
    this.rootNote = rootNote
  }

  render () {
    return (
      <div className="GuitarString">
        <NoteView note={this.rootNote} />
        {this.notes.map((note) =>
          <NoteView note={note} />
        )}
      </div>
    )
  }
}

export default GuitarString
