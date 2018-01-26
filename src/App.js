import React, {Component} from 'react'
import './App.css'
import Fretboard from './Fretboard/Fretboard'


import Select from 'material-ui/Select'



class App extends Component {

  state = {
    frets: 24
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };



  render () {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{this.state.frets} Frets</h1>
        </header>

        <select
          value={this.state.frets}
          onChange={this.handleChange('frets')}
        >
          <option value={12}>12</option>
          <option value={22}>22</option>
          <option value={24}>24</option>
        </select>

        <div className="App-fretboard-container">
          <Fretboard frets={this.state.frets}/>
        </div>
      </div>
    )
  }
}

export default App
