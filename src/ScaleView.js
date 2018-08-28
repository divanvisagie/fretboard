import React, {Component} from 'react'
import {connect} from 'react-redux'

import {FormControl} from 'material-ui/Form'
import Input, {InputLabel} from 'material-ui/Input'
import Select from 'material-ui/Select'
import {notes} from './Core/Note'
import {MenuItem} from 'material-ui/Menu'

const mapStateToProps = (state) => {
    return {
      focusNote: state.focusNote
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      handleFocusNoteChange (event) {
        dispatch({
          type : 'SET_FOCUS_NOTE',
          value: event.target.value
        })
      }
    }
  }
  
const ScaleSelectorComponent = ({focusNote, handleFocusNoteChange}) =>
  <FormControl>
    <InputLabel htmlFor="tuning">Focus Note</InputLabel>
    <Select
      value={focusNote}
      onChange={handleFocusNoteChange}
      inputProps={{
        name: 'focusNote',
        id  : 'focusNote'
      }}
    >
      {notes.map((x, key) =>
        <MenuItem value={x} key={key}>{x}</MenuItem>
      )}
    </Select>
  </FormControl>

const ScaleView = connect(
  mapStateToProps,
  mapDispatchToProps
)(ScaleSelectorComponent)
export default ScaleView
