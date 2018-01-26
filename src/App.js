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
    age: 20
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };



  render () {

   


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{this.state.age}</h1>
        </header>

        <MuiThemeProvider theme={theme}>
        <Select
        native
        value={this.state.age}
        onChange={this.handleChange('age')}
        inputProps={{
          id: 'age-native-simple',
        }}>
        <option value="" />
        <option value={10}>Ten</option>
        <option value={20}>Twenty</option>
        <option value={30}>Thirty</option>
      </Select>

        <div className="App-fretboard-container">
          <Fretboard/>
        </div>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default App
