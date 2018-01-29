import {connect} from 'react-redux'
import React from 'react'

import Input, {InputLabel} from 'material-ui/Input'
import {FormControl} from 'material-ui/Form'
import Select from 'material-ui/Select'
import {MenuItem} from 'material-ui/Menu'

import {notes} from '../Core/Note'

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

const style = {
  minWidth : '100px',
  alignText: 'left'
}

const KeySelectorComponent = ({focusNote, handleFocusNoteChange}) =>
  <FormControl style={style}>
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

const KeySelector = connect(
  mapStateToProps,
  mapDispatchToProps
)(KeySelectorComponent)

export default KeySelector
