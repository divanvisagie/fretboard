import React from 'react'

const Settings = ({handleFretsChange, frets}) =>
  <input type="number" onChange={handleFretsChange} value={frets} />

export default Settings
