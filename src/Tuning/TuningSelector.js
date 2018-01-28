import React from 'react'

import Select from 'material-ui/Select'
import { MenuItem } from 'material-ui/Menu'

// const TuningSelector = ({tuning, handleTuningChange, tuningOptions}) =>
//   <select value={tuning.name}
//     onChange={handleTuningChange} >
//     {tuningOptions.map((x, key) =>
//       <option value={x} key={key}>{x}</option>
//     )}
//   </select>

const TuningSelector = ({tuning, handleTuningChange, tuningOptions}) =>
  <Select
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

export default TuningSelector
