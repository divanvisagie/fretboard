'use strict'

import LoopedAccessor from './LoopedArrayAccessor'

describe(`LoopedAccessor getAtIndex when given the array [
        'c',
        'd',
        'e',
        'f',
        'g',
        'a',
        'b']`, () => {
    var loopedAccessorInstance = LoopedAccessor([
      'C',
      'D',
      'E',
      'F',
      'G',
      'A',
      'B'
    ])

    it('should return c when getting at index ', () => {
      expect(loopedAccessorInstance.getAtIndex(0)).toBe('C')
    })

    it('should return e when getting at index 2', () => {
      expect(loopedAccessorInstance.getAtIndex(2)).toBe('E')
    })

    it('should return c when given index of 7', () => {
      expect(loopedAccessorInstance.getAtIndex(7)).toBe('C')
    })

    it('should return c when given index of 14', () => {
      expect(loopedAccessorInstance.getAtIndex(14)).toBe('C')
    })

    it('should return c when given index of -1', () => {
      expect(loopedAccessorInstance.getAtIndex(-1)).toBe('B')
    })
  })
