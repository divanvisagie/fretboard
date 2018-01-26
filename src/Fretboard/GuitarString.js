import React, {Component} from 'react'
import './GuitarString.css'

import _ from 'underscore'

import GuitarStringModel from '../Core/GuitarString'
import Note from '../Core/Note'

import NoteView from './NoteView'
import NutView from './NutView'

class GuitarString extends Component {

  state = {
    notes: []
  }

  constructor(props) {
    super(props)

    this.state.notes = this.getNotes({
      rootNote: this.props.rootNote,
      frets: this.props.frets
    })
  }


  getNotes({rootNote, frets}) {
    const guitarString = GuitarStringModel(rootNote, frets)
    let notes = []
    for(let i = 1; i < frets + 1; i++) {
      notes.push(guitarString.noteAtFret(i))
    }
    return notes;
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      notes: this.getNotes({
        rootNote: nextProps.rootNote,
        frets: nextProps.frets
      })
    })
  }

  render () {
    return (
      <div className="GuitarString">
        {/* {this.props.frets} */}
        <NutView note={Note(this.props.rootNote)} />
        {this.state.notes.map((note, index) =>
          <NoteView note={note} key={index+note.toString()}/>
        )}
      </div>
    )
  }
}

export default GuitarString
