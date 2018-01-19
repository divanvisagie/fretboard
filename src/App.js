import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'

import Fretboard from './Fretboard/Fretboard'

class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Fretboard</h1>
        </header>

        <p>
          <Fretboard/>
        </p>
      </div>
    )
  }
}

export default App
