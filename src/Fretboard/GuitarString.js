'use strict'

import React, {Component} from 'react'
import './GuitarString.css'

import _ from 'underscore'

import GuitarStringModel from '../Core/GuitarString'
import Note from '../Core/Note'

class GuitarString extends Component {
  constructor (props) {
    super(props)

    const guitarString = GuitarStringModel(this.props.rootNote, this.props.frets)
    const rootNote = Note(this.props.rootNote)
    const notes = _.range(this.props.frets).map((x) => {
      const fret = parseInt(x, 10)
      return guitarString.noteAtFret(fret).toString()
    })

    this.notes = notes
  }

  render () {
    return (
      <div className="GuitarString">
        Root Note: {this.props.rootNote}
        <br/>
        Frets: {this.props.frets}
        {this.test}

        {this.notes.map((noteName) =>
          <div>
            {noteName}
          </div>
        )}
      </div>
    )
  }
}

export default GuitarString
