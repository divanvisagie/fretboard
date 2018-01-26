import React, {Component} from 'react'
import './Fretboard.css'

import MarkerBoard from './MarkerBoard'

import _ from 'underscore'

import GuitarString from './GuitarString'

class Fretboard extends Component {
  render () {
    return (
      <div className="Fretboard">
        <div>
          {this.props.tuning.reverse().map((note, i) =>
            <GuitarString rootNote={note} frets={this.props.frets} key={i} />
          )}
        </div>
        <MarkerBoard frets={this.props.frets}/>
      </div>
    )
  }
}

export default Fretboard
