import React from 'react'

import Select from 'material-ui/Select'
import { MenuItem } from 'material-ui/Menu'

import Input, { InputLabel } from 'material-ui/Input'
import { FormControl } from 'material-ui/Form'

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

export default TuningSelector
