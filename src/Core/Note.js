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

function isSharp (note) {
    if (note.length > 1) {
        return true
    }
    return false
}

function getNoteRoot (note) {
    return note[0]
}

function Note (name) {
    const FLAT_CHARACTER = '♭'

    let sharp = false

    return {
        sharpen () {
            sharp = true
            return this
        },
        toString (useFlat) {
            if (useFlat) {
                return this.toFlatString()
            }
            if (sharp === true) {
                return name + '#'
            }
            return name
        },
        toFlatString () {
            const flatNoteName = this.next()
            return `${flatNoteName}${FLAT_CHARACTER}`
        },
        getIndex () {
            const fullName = this.toString()
            return noteOrder.indexOf(fullName)
        },
        next (halfSteps = 1) {
            const noteOrderAccessor = LoopedAccessor(noteOrder)

            const currentIndex = this.getIndex()
            const nextIndex = currentIndex + halfSteps

            const nextNoteName = noteOrderAccessor.getAtIndex(nextIndex)

            if (isSharp(nextNoteName)) {
                return Note(getNoteRoot(nextNoteName)).sharpen()
            }
            return Note(getNoteRoot(nextNoteName))
        }
    }
}

export default Note

const notes = noteOrder
export {
    notes
}
