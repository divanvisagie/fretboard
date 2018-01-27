import { combineReducers } from 'redux'

function focusNote (state = '', action) {
  switch (action.type) {
  case 'SET_FOCUS_NOTE':
    state = action.value
    return state
  default:
    return state
  }
}

const loadedFrets = parseInt(localStorage.getItem('frets'), 10) || 24
function frets (state = loadedFrets, action) {
  switch (action.type) {
  case 'SET_FRETS':
    state = parseInt(action.value, 10)
    localStorage.setItem('frets', state)
    return state
  default:
    return state
  }
}

const tuningMap = {
  'Standard E'           : ['E', 'A', 'D', 'G', 'B', 'E'],
  'Standard C'           : ['C', 'F', 'A#', 'D#', 'G', 'C'],
  'Drop C'               : ['C', 'G', 'C', 'F', 'A', 'D'],
  'Standard B (7 String)': ['B', 'E', 'A', 'D', 'G', 'B', 'E'],
  'Bass E'               : ['E', 'A', 'D', 'G']
}

function tuningOptions () {
  return Object.keys(tuningMap)
}

const tuningDefault = {
  name : 'Standard E',
  value: ['E', 'A', 'D', 'G', 'B', 'G']
}
function tuning (state = tuningDefault, action) {
  switch (action.type) {
  case 'SET_TUNING':
    state = {
      name : action.name,
      value: tuningMap[action.name]
    }
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
