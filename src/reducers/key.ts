import {Action} from 'redux'

interface KeyAction extends Action {
    value: string
}

export default function key (state: string = '', action: KeyAction): string {
    if (action.type === 'SET_KEY') {
        state = action.value
    }
    return state
}
