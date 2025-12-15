const tunings = [
    {
        name : 'Standard E',
        value: ['E', 'A', 'D', 'G', 'B', 'E']
    },
    {
        name: 'E Flat',
        value: ['D#', 'G#', 'C#', 'F#', 'A#', 'D#']
    }, 
    {
        name : 'Standard C',
        value: ['C', 'F', 'A#', 'D#', 'G', 'C']
    },
    {
        name : 'Standard D',
        value: ['D', 'G', 'C', 'F', 'A', 'D']
    },
    {
        name : 'Drop C',
        value: ['C', 'G', 'C', 'F', 'A', 'D']
    },
    {
        name : 'Open C',
        value: ['C', 'G', 'C', 'G', 'C', 'E']
    },
    {
        name : 'Standard B (7 String)',
        value: ['B', 'E', 'A', 'D', 'G', 'B', 'E']
    },
    {
        name : 'Bass E',
        value: ['E', 'A', 'D', 'G']
    },
    {
        name: 'Germanic Lyre E',
        value: ['E', 'F#', 'G#', 'A', 'B', 'C#']
    }
]

const tuningDefault = {
    name : 'Standard E',
    value: ['E', 'A', 'D', 'G', 'B', 'E']
}

export function tuning (state = tuningDefault, action) {
    switch (action.type) {
    case 'SET_TUNING':
        state = action.value
        return state
    default:
        return state
    }
}

export function tuningModalOpen (state = false, action) {
    switch (action.type) {
    case 'TOGGLE_TUNING_MODAL_OPEN':
        state = !state
        return state
    case 'SET_TUNING_MODAL_OPEN':
        state = action.value
        return state
    default:
        return state
    }
}

export function tuningOptions (state = tunings, action) {
    switch (action.type) {
    case 'ADD_TUNING':
        return [...state, action.value]
    default:
        return state
    }
}
