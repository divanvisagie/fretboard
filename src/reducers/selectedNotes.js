export default function selectedNotes (state = [], action) {
    switch (action.type) {
    case 'SET_SELECTED_NOTE':
        const { value } = action
        const findExisting = (i) => {
            return i.note === value.note && i.string === value.string
        }
        const existingIndex = state.findIndex(findExisting)
        if (existingIndex < 0) {
            return [...state, value]
        }
        else {
            return state.filter(i => !findExisting(i))
        }
    case 'CLEAR_SELECTED_NOTES':
        return []
    default:
        return state
    }
}
