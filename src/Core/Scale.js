'use strict'

import Note from './Note'
import _ from 'underscore'

const scales = [
  {
    name    : 'Major',
    sequence: [2, 2, 1, 2, 2, 2, 1]
  },
  {
    name    : 'Natural Minor',
    sequence: [2, 1, 2, 2, 1, 2, 2]
  }
]

function Scale (note, sequence) {
  return {
    noteSequence () {
      const startNote = Note(note)

      const reductionTarget = {
        seq         : [],
        pointInScale: 0
      }

      const reduced = _.reduce(sequence, (acc, i) => {
        const nextNote = startNote.next(acc.pointInScale)
        return {
          seq         : _.flatten([acc.seq, [nextNote]]),
          pointInScale: acc.pointInScale + i
        }
      }, reductionTarget)

      return reduced.seq
    }
  }
}

export default Scale

export {
  Scale,
  scales
}
