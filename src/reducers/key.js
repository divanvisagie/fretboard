export default function key (state = '', action) {
    if (action.type === 'SET_KEY') {
        state = action.value
    }
    return state
}
