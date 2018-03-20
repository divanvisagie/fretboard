import {connect} from 'react-redux'
import React from 'react'

import Input, {InputLabel} from 'material-ui/Input'
import {FormControl} from 'material-ui/Form'
import Select from 'material-ui/Select'
import {MenuItem} from 'material-ui/Menu'

import {notes} from '../Core/Note'
import {scales} from '../Core/Scale'

const ScaleSelectorComponent = ({focusNote,
  scale,
  scaleName,
  handleScaleChange}) =>
  <FormControl>
    <InputLabel htmlFor="scale">Scale</InputLabel>

    <Select
      value={scaleName}
      onChange={handleScaleChange}>
    </Select>
  </FormControl>