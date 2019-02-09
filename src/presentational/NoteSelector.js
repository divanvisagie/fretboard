import React from 'react'

import { NoteDisplay } from '../container/NoteView'
import Note, { notes } from '../core/Note'

const noteObjects = notes.map(n => new Note(n))

const NoteSelector = ({ focusNote, handleNoteSelected }) =>
    <div className='noselect FocusNoteSelector-notes'>
        {noteObjects.map((x, i) =>
            <NoteDisplay
                key={i.toString()}
                focusNote={focusNote}
                note={x}
                onClick={() => handleNoteSelected(x.toString())} />
        )}
    </div>

export default NoteSelector
