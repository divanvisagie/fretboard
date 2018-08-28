import Scale, {scales} from './Scale'
import Note from './Note'

describe('when creating a new Scale', () => {
  describe('when using any parameters', () => {
    it('should be an object', () => {
      expect(Scale('C', scales[0].sequence)).not.toBe(undefined)
    })
  })

  describe('when using a C major Scale', () => {
    const cMaj = Scale('C', scales[0].sequence).noteSequence().map((x) => x.toString())
    const expected = ['C', 'D', 'E', 'F', 'G', 'A', 'B']
    expect(cMaj).toEqual(expected)
  })

  describe('when using a C minor Scale', () => {
    const cMaj = Scale('C', scales[1].sequence).noteSequence().map((x) => x.toString())
    const expected = ['C', 'D', 'D#', 'F', 'G', 'G#', 'A#']
    expect(cMaj).toEqual(expected)
  })
})
