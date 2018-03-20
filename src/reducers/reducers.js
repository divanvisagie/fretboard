import {combineReducers} from 'redux'

import frets from './frets'

import {tuningOptions, tuning} from './tuning'

function focusNote (state = '', action) {
  switch (action.type) {
  case 'SET_FOCUS_NOTE':
    if (state === action.value) {
      state = ''
    } else {
      state = action.value
    }
    return state
  default:
    return state
  }
}

function key (state = '', action) {
  if (action.type === 'SET_KEY') {
    state = action.value
  }
  return state
}

export default combineReducers({
  focusNote,
  frets,
  key,
  tuningOptions,
  tuning
})
