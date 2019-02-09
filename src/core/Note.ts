import LoopedAccessor from './LoopedArrayAccessor'

const noteOrder = [
    'A',
    'A#',
    'B',
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#'
]

function isSharp(note) {
    if (note.length > 1) {
        return true
    }
    return false
}

function getNoteRoot(note) {
    return note[0]
}

const FLAT_CHARACTER = '♭'
export default class Note {
    private sharp: boolean = false
    constructor(public name) {
    }
    sharpen() {
        this.sharp = true
        return this
    }
    toString(useFlat: boolean = false) {
        if (useFlat) {
            return this.toFlatString()
        }
        if (this.sharp) {
            return this.name + '#'
        }
        return this.name
    }
    toFlatString() {
        const flatNoteName = this.next()
        return `${flatNoteName}${FLAT_CHARACTER}`
    }
    getIndex() {
        const fullName = this.toString()
        return noteOrder.indexOf(fullName)
    }
    next(halfSteps = 1) {
        const noteOrderAccessor = LoopedAccessor(noteOrder)

        const currentIndex = this.getIndex()
        const nextIndex = currentIndex + halfSteps

        const nextNoteName = noteOrderAccessor.getAtIndex(nextIndex)

        if (isSharp(nextNoteName)) {
            return new Note(getNoteRoot(nextNoteName)).sharpen()
        }
        return new Note(getNoteRoot(nextNoteName))
    }
}

export {
    noteOrder as notes
}
