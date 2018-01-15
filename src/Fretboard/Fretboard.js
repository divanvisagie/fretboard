import React, {Component} from 'react'
import './Fretboard.css'

import GuitarString from './GuitarString'

class Fretboard extends Component {
  render () {
    const frets = 24
    return (
      <div className="Fretboard">
        <GuitarString rootNote='E' frets={frets}></GuitarString>
        <GuitarString rootNote='B' frets={frets}></GuitarString>
        <GuitarString rootNote='G' frets={frets}></GuitarString>
        <GuitarString rootNote='D' frets={frets}></GuitarString>
        <GuitarString rootNote='A' frets={frets}></GuitarString>
        <GuitarString rootNote='E' frets={frets}></GuitarString>
      </div>
    )
  }
}

export default Fretboard
