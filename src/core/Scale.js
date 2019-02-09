import Note from './Note'
import {flatten, reduce} from 'ramda'

const scales = [
    {
        name    : 'Major',
        sequence: [2, 2, 1, 2, 2, 2, 1]
    },
    {
        name    : 'Natural Minor',
        sequence: [2, 1, 2, 2, 1, 2, 2]
    },
    {
        name    : 'Major Pentatonic',
        sequence: [2, 2, 3, 2, 3]
    },
    {
        name    : 'Minor Pentatonic',
        sequence: [3, 2, 2, 3, 2]
    },
    {
        name    : 'Minor Harmonic',
        sequence: [2, 1, 2, 2, 1, 3, 1]
    },
    {
        name    : 'Diminished',
        sequence: [2, 1, 2, 1, 2, 1, 2, 1]
    },
    {
        name    : 'Persian Scale',
        sequence: [1, 3, 1, 1, 2, 3, 1]
    }
]

function Scale (note, sequence) {
    return {
        noteSequence () {
            const startNote = new Note(note)

            const reductionTarget = {
                seq         : [],
                pointInScale: 0
            }

            const reduced = reduce((acc, i) => {
                const nextNote = startNote.next(acc.pointInScale)
                return {
                    seq         : flatten([acc.seq, [nextNote]]),
                    pointInScale: acc.pointInScale + i
                }
            }, reductionTarget, sequence)

            return reduced.seq
        }
    }
}

export default Scale

export {
    Scale,
    scales
}
