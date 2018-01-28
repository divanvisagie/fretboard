import React, {Component} from 'react'
import './App.css'

import FretboardConnector from './Fretboard/FretboardConnector'
import TuningSelectorConnector from './Tuning/TuningSelectorConnector'

import SettingsConnector from './Settings/SettingsConnector'
import TuningDisplayConnector from './Tuning/TuningDisplay'

import GitHubForkRibbon from 'react-github-fork-ribbon'

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'

const tuningMap = {
  'Standard E'           : ['E', 'A', 'D', 'G', 'B', 'E'],
  'Standard C'           : ['C', 'F', 'A#', 'D#', 'G', 'C'],
  'Drop C'               : ['C', 'G', 'C', 'F', 'A', 'D'],
  'Standard B (7 String)': ['B', 'E', 'A', 'D', 'G', 'B', 'E'],
  'Bass E'               : ['E', 'A', 'D', 'G']
}

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  }
})

class App extends Component {
  state = {
    frets      : 24,
    tuningValue: 'Standard E',
    tuning     : this.getTuning('Standard E')
  }

  getTuning (key) {
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
    this.setState({ frets: parseInt(event.target.value, 10) })
  };

  renderRibbon () {
    if (window.location.hostname !== 'dvisagie.com') {
      return <div></div>
    }
    return <GitHubForkRibbon href="https://github.com/divanvisagie/fretboard"
      target="_blank"
      position="right">
        GitHub
    </GitHubForkRibbon>
  }

  render () {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <header className="App-header">
            {this.renderRibbon()}
            <h1 className="App-title">
              <TuningDisplayConnector/>
            </h1>
          </header>

          <TuningSelectorConnector />
          <SettingsConnector />

          <div className="App-fretboard-container">
            <FretboardConnector />
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
