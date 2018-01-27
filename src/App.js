import React, {Component} from 'react'
import './App.css'
import Fretboard from './Fretboard/Fretboard'

import FretboardConnector from './Fretboard/FretboardConnector'
import TuningSelectorConnector from './Tuning/TuningSelectorConnector'


import Select from 'material-ui/Select'

const tuningMap = {
  'Standard E': ['E','A','D','G','B','E'],
  'Standard C': ['C','F','A#','D#','G','C'],
  'Drop C': ['C','G','C','F','A','D'],
  'Standard B (7 String)': ['B','E','A','D','G','B','E'],
  'Bass E': ['E','A','D','G']
}

class App extends Component {

  state = {
    frets: 24,
    tuningValue: 'Standard E',
    tuning: this.getTuning('Standard E')
  }

  getTuning(key) {
    return tuningMap[key]
  }

  handleTuningChange = name => event => {
    const tuning = this.getTuning(event.target.value)
    this.setState({ 
      tuningValue: event.target.value,
      tuning 
    })
  };

  handleFretChange = name => event => {
    this.setState({ frets: parseInt(event.target.value,10) })
  };

  render () {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{this.state.tuningValue} Tuning,  {this.state.frets} Frets</h1>
        </header>

        {/* <select value={this.state.tuningValue} 
          onChange={this.handleTuningChange()} >
          {Object.keys(tuningMap).map(x => 
            <option value={x}>{x}</option>
          )}
        </select> */}

        <TuningSelectorConnector />

        <select
          value={this.state.frets}
          onChange={this.handleFretChange()}
        >
          <option value={12}>12</option>
          <option value={22}>22</option>
          <option value={24}>24</option>
        </select>

        <div className="App-fretboard-container">
          <FretboardConnector />
        </div>
      </div>
    )
  }
}

export default App
