import React from 'react'
import './App.scss'

import Fretboard from './container/Fretboard'
import TuningSelector from './container/TuningSelector'
import ScaleSelector from './container/ScaleSelector'
import ClearSelected from './container/ClearSelected'
import Settings from './container/Settings'
import FocusNoteSelector from './container/FocusNoteSelector'

const App = () => (
    <div className='App'>
        <div className='App-toolbar'>
            <h3>
                Fretboard
            </h3>
            <div className='App-toolbar-menu'>
                <TuningSelector />
                <Settings />
            </div>
        </div>

        <div className='App-pre-fretboard'>
            <FocusNoteSelector />
            <ScaleSelector />
        </div>
        <div className='App-fretboard-container'>
            <Fretboard />
        </div>
        <div className='App-fretboard-button'>
            <ClearSelected />
        </div>
    </div>
)

export default App
