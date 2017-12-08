'use strict'

import Note from './Note'

describe('when creating a new note object', () => {
  describe('when creating the note C', () => {
    const note = Note('C')

    it('should have a toString value of C', () => {
      const name = note.toString()
      expect(name).toBe('C')
    })
    it('should return C# when calling next()', () => {
      const name = note.next().toString()
      expect(name).toBe('C#')
    })
    it('should return D when calling next(2)', () => {
      const name = note.next(2).toString()
      expect(name).toBe('D')
    })
  })

  describe('when creating the note C#', () => {
    const note = Note('C').sharpen()

    it('should have a toString value of C#', () => {
      const name = note.toString()
      expect(name).toBe('C#')
    })

    it('should return D♭ when calling toString with useFlat parameter', () => {
      const name = note.toString(true)
      expect(name).toBe('D♭')
    })
    it('should return D when calling next()', () => {
      const name = note.next().toString()
      expect(name).toBe('D')
    })
  })

  describe('when creating the note G#', () => {
    const note = Note('G').sharpen()
    it('should have a toString value of G#', () => {
      const name = note.toString()
      expect(name).toBe('G#')
    })
    it('should return A♭ when calling toString with useFlat parameter', () => {
      const name = note.toString(true)
      expect(name).toBe('A♭')
    })
    it('should return A when calling next()', () => {
      const name = note.next().toString()
      expect(name).toBe('A')
    })
  })
})
