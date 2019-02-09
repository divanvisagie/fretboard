const loadedFrets = parseInt(localStorage.getItem('frets'), 10) || 24

export default function frets (state = loadedFrets, action) {
    switch (action.type) {
    case 'SET_FRETS':
        state = parseInt(action.value, 10)
        localStorage.setItem('frets', state)
        return state
    default:
        return state
    }
}
