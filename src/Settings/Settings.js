import React from 'react'
import TextField from 'material-ui/TextField'

const Settings = ({handleFretsChange, frets}) =>
  <TextField type="number"
    onChange={handleFretsChange}
    value={frets}
    InputLabelProps={{
      shrink: true
    }}
    margin="normal"
    min={27}
    min={12} />

export default Settings
