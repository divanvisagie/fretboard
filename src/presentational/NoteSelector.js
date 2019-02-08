import React from 'react'

import { NoteDisplay } from '../container/NoteView'
import Note, { notes } from '../core/Note'

const noteObjects = notes.map(n => Note(n))

const NoteSelector = ({ focusNote, handleNoteSelected }) =>
    <div className='noselect FocusNoteSelector-notes'>
        {noteObjects.map((x, i) =>
            <NoteDisplay
                key={i}
                focusNote={focusNote}
                note={x}
                onClick={e => handleNoteSelected(x.toString())} />
        )}
    </div>

export default NoteSelector
