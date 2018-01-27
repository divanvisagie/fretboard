import React from 'react'

const TuningSelector = ({tuning, handleTuningChange, tuningOptions}) =>
  <select value={tuning.name}
    onChange={handleTuningChange} >
    {tuningOptions.map((x, key) =>
      <option value={x} key={key}>{x}</option>
    )}
  </select>

export default TuningSelector
