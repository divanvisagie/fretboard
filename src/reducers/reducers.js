import {combineReducers} from 'redux'

import {tuningOptions, tuning} from './tuning'

import {scales} from '../core/Scale'

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

function focusNote (state = 'C', action) {
    switch (action.type) {
    case 'SET_FOCUS_NOTE':
        state = action.value
        return state
    default:
        return state
    }
}

const [first] = scales
function scale (state = first, action) {
    switch (action.type) {
    case 'SET_SCALE':
        state = action.value
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

function selectedNotes (state = [], action) {
    switch (action.type) {
    case 'SET_SELECTED_NOTE':
        const {value} = action

        const findExisting = (i) => {
            return i.note === value.note && i.string === value.string
        }

        const existingIndex = state.findIndex(findExisting)

        if (existingIndex < 0) {
            return [...state, value]
        } else {
            return state.filter(i => !findExisting(i))
        }
    case 'CLEAR_SELECTED_NOTES':
        return []
    default:
        return state
    }
}

export default combineReducers({
    focusNote,
    frets,
    key,
    tuningOptions,
    tuning,
    scale,
    selectedNotes
})
