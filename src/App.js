import React, {Component} from 'react'
import './App.css'

import Fretboard from './Fretboard/Fretboard'
import TuningSelector from './Tuning/TuningSelector'

import Settings from './Settings/Settings'
import TuningDisplayConnector from './Tuning/TuningDisplay'

import GitHubForkRibbon from 'react-github-fork-ribbon'

import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'

import KeySelector from './Key/KeySelector'

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

          <AppBar position="static" color="default" >
            <Toolbar className="App-toolbar">
              <Typography type="title" color="inherit" className="App-title">
                Fretboard
              </Typography>
              <div className="menu-button">
                <TuningSelector />
                <Settings />
              </div>
            </Toolbar>
          </AppBar>

          <div className="App-pre-fretboard">
            <KeySelector />
          </div>
          <div className="App-fretboard-container">
            <Fretboard />
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
