import React, {Component} from 'react'
import './Fretboard.css'

import MarkerBoard from './MarkerBoard'

import GuitarString from './GuitarString'

class Fretboard extends Component {
  render () {
    const frets = 24
    return (
      <div className="Fretboard">
        <div>
          <GuitarString rootNote='E' frets={frets}/>
          <GuitarString rootNote='B' frets={frets}/>
          <GuitarString rootNote='G' frets={frets}/>
          <GuitarString rootNote='D' frets={frets}/>
          <GuitarString rootNote='A' frets={frets}/>
          <GuitarString rootNote='E' frets={frets}/>
        </div>
        <MarkerBoard frets={frets}/>
      </div>
    )
  }
}

export default Fretboard
