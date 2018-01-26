import React, {Component} from 'react'
import './Fretboard.css'

import MarkerBoard from './MarkerBoard'

import GuitarString from './GuitarString'

class Fretboard extends Component {
  render () {
    return (
      <div className="Fretboard">
        <div>
          <GuitarString rootNote='E' frets={this.props.frets} key="1" />
          <GuitarString rootNote='B' frets={this.props.frets} key="2" />
          <GuitarString rootNote='G' frets={this.props.frets} key="3" />
          <GuitarString rootNote='D' frets={this.props.frets} key="4" />
          <GuitarString rootNote='A' frets={this.props.frets} key="5" />
          <GuitarString rootNote='E' frets={this.props.frets} key="6" />
        </div>
        <MarkerBoard frets={this.props.frets}/>
      </div>
    )
  }
}

export default Fretboard
