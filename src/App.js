import React, {Component} from 'react'
import './App.css'

import Fretboard from './container/Fretboard'
import TuningSelector from './container/TuningSelector'
import ScaleSelector from './container/ScaleSelector'
import ClearSelected from './container/ClearSelected'
import Settings from './container/Settings'
import FocusNoteSelector from './container/FocusNoteSelector'

import GitHubForkRibbon from 'react-github-fork-ribbon'

const tuningMap = {
    'Standard E'           : ['E', 'A', 'D', 'G', 'B', 'E'],
    'Standard C'           : ['C', 'F', 'A#', 'D#', 'G', 'C'],
    'Drop C'               : ['C', 'G', 'C', 'F', 'A', 'D'],
    'Standard B (7 String)': ['B', 'E', 'A', 'D', 'G', 'B', 'E'],
    'Bass E'               : ['E', 'A', 'D', 'G']
}

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
      return <GitHubForkRibbon href='https://github.com/divanvisagie/fretboard'
          target='_blank'
          position='right'>
        GitHub
      </GitHubForkRibbon>
  }

  render () {
      return (
          <div className='App'>
              <div className='App-toolbar'>
                  <h3>
                    Fretboard
                  </h3>
                  <div className='App-toolbar-menu'>
                      <TuningSelector />
                      <Settings />
                  </div>
              </div>

              <div className='App-pre-fretboard'>
                  <FocusNoteSelector />
                  <ScaleSelector/>
              </div>
              <div className='App-fretboard-container'>
                  <Fretboard />
              </div>
              <div className='App-fretboard-button'>
                  <ClearSelected />
              </div>
          </div>
      )
  }
}

export default App
