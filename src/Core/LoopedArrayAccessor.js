'use strict'

function LoopedAccessor(array) {
  return {
    getAtIndex(index) {

      if (index < 0) {
        const indexToUse = array.length + index
        return array[indexToUse]
      }

      if (index >= array.length) {
          let remainder = index % array.length
          return array[remainder]
      }

      return array[index]
    }
  }
}

export default LoopedAccessor;