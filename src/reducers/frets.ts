import {Action} from 'redux'

export interface FretsAction extends Action {
    value: number
}

const loadedFrets: number = parseInt(localStorage.getItem('frets'), 10) || 24

export default function frets (state: number = loadedFrets, action: FretsAction): number {
    switch (action.type) {
    case 'SET_FRETS':
        state = action.value
        localStorage.setItem('frets', state.toString())
        return state
    default:
        return state
    }
}
