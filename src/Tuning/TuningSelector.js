import React from 'react'

import Select from 'material-ui/Select'
import {MenuItem} from 'material-ui/Menu'

import Input, {InputLabel} from 'material-ui/Input'
import {FormControl} from 'material-ui/Form'
import {connect} from 'react-redux'

const TuningSelector = ({tuning, handleTuningChange, tuningOptions}) =>
  <FormControl>
    <InputLabel htmlFor="tuning">Tuning</InputLabel>
    <Select
      label="Tuning"
      value={tuning.name}
      onChange={handleTuningChange}
      inputProps={{
        name: 'tuning',
        id  : 'tuning'
      }}
    >
      {tuningOptions.map((x, key) =>
        <MenuItem value={x} key={key}>{x}</MenuItem>
      )}

    </Select>
  </FormControl>

const mapStateToProps = (state) => {
  return {
    tuningOptions: state.tuningOptions,
    tuning       : state.tuning
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleTuningChange (event) {
      dispatch({
        type: 'SET_TUNING',
        name: event.target.value
      })
    }
  }
}

const TuningSelectorConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(TuningSelector)

export default TuningSelectorConnector
