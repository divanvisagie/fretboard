import { combineReducers } from 'redux'

import frets from './frets'

import {tuningOptions, tuning} from './tuning'

function focusNote (state = 'E', action) {
  switch (action.type) {
  case 'SET_FOCUS_NOTE':
    state = action.value
    return state
  default:
    return state
  }
}

export default combineReducers({
  focusNote,
  frets,
  tuningOptions,
  tuning
})
