import React, {Component} from 'react'
import './App.css'

import Fretboard from './Fretboard/Fretboard'

class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Fretboard</h1>
        </header>

        <div className="App-fretboard-container">
          <Fretboard/>
        </div>
      </div>
    )
  }
}

export default App
