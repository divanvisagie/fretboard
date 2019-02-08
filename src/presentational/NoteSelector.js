import { NoteDisplay } from '../container/NoteView'
import { noteObjects } from '../container/FocusNoteSelector'

export const NoteSelector = ({ focusNote, handleNoteSelected }) =>
    <div className='noselect FocusNoteSelector-notes'>
        {noteObjects.map((x, i) =>
            <NoteDisplay
                key={i}
                focusNote={focusNote}
                note={x}
                onClick={e => handleNoteSelected(x.toString())} />
        )}
    </div>
