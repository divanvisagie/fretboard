export const focusNoteState = 'C'
export default function focusNote (state = focusNoteState, action) {
    switch (action.type) {
    case 'SET_FOCUS_NOTE':
        state = action.value
        return state
    default:
        return state
    }
}
