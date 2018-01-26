import React, {Component} from 'react'
import './App.css'
import Fretboard from './Fretboard/Fretboard'

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'

import Select from 'material-ui/Select'

const theme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
  },
});


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

        <MuiThemeProvider theme={theme}>
        <Select
        native
        value={this.state.frets}
        onChange={this.handleChange('frets')}
        inputProps={{
          id: 'age-native-simple',
        }}>
        <option value="" />
        <option value={12}>12</option>
        <option value={22}>22</option>
        <option value={24}>24</option>
      </Select>

        <div className="App-fretboard-container">
          <Fretboard frets={this.state.frets}/>
        </div>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default App
