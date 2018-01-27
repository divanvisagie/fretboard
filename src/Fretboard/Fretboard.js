import React, {Component} from 'react'
import './Fretboard.css'



import {reverse} from 'ramda'

import MarkerBoard from './MarkerBoard'

import GuitarString from './GuitarString'

class Fretboard extends Component {
  render () {
    return (
      <div className="Fretboard">
        <div>
          {reverse(this.props.tuning).map((note, i) =>
            <GuitarString rootNote={note} frets={this.props.frets} key={i} />
          )}
        </div>
        <MarkerBoard frets={this.props.frets}/>
      </div>
    )
  }
}

export default Fretboard
