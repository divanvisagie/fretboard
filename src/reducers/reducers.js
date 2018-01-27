import { combineReducers } from 'redux'

function focusNote (state = '', action) {
  switch (action.type) {
  case 'FOCUS_NOTE':
    state = action.value
    return state
  default:
    return state
  }
}

const tuningDefault = {
  name : 'Standard E',
  value: ['E', 'A', 'D', 'G', 'B', 'E']
}
function tuning (state = tuningDefault, action) {
  switch (action.type) {
  case '':
    state = action.value
    return state
  default:
    return state
  }
}

export default combineReducers({
  focusNote,
  tuning
})
