import {Action} from 'redux'

interface FocusNoteAction extends Action {
    value: string
}

export const focusNoteState = 'C'

export default function focusNote (state: string = focusNoteState, action: FocusNoteAction): string {
    switch (action.type) {
    case 'SET_FOCUS_NOTE':
        state = action.value
        return state
    default:
        return state
    }
}
