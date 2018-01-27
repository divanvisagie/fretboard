import React, {Component} from 'react'

const TuningSelector = ({tuning, handleTuningChange, tuningOptions}) =>
  <select value={tuning.name}
    onChange={handleTuningChange} >
    {tuningOptions.map(x =>
      <option value={x}>{x}</option>
    )}
  </select>

export default TuningSelector
