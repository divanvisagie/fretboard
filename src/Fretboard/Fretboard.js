import React, {Component} from 'react'
import './Fretboard.css'

import MarkerBoard from './MarkerBoard'

import GuitarString from './GuitarString'

class Fretboard extends Component {
  render () {
    return (
      <div className="Fretboard">
        <div>
          <GuitarString rootNote='E' frets={this.props.frets}/>
          <GuitarString rootNote='B' frets={this.props.frets}/>
          <GuitarString rootNote='G' frets={this.props.frets}/>
          <GuitarString rootNote='D' frets={this.props.frets}/>
          <GuitarString rootNote='A' frets={this.props.frets}/>
          <GuitarString rootNote='E' frets={this.props.frets}/>
        </div>
        <MarkerBoard frets={this.props.frets}/>
      </div>
    )
  }
}

export default Fretboard
