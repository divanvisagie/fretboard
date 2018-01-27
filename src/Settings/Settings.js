import React from 'react'

const Settings = ({handleFretsChange, frets}) =>
  <input type="number" onChange={handleFretsChange} value={frets} max="27" min="12" />

export default Settings
