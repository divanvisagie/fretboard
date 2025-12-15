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
        <nav>
            <div>
                <h1>
                    <a href="/">Divan <span className="full">Visagie</span></a>
                    <span className="nav-separator">/</span>
                    <span className="nav-project">Fretboard</span>
                </h1>
                <div className='App-toolbar-menu'>
                    <TuningSelector />
                    <Settings />
                </div>
            </div>
        </nav>

        <div className='App-content'>
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

        <footer>
            Divan Visagie • Copyright 2019-25 •{' '}
            <a href="mailto:me@divanv.com">me@divanv.com</a> •{' '}
            <span><a href="/podcast">Podcast</a></span> •{' '}
            <span><a href="/cv">CV</a></span> •{' '}
            <span><a href="https://github.com/divanvisagie">GitHub</a></span>
        </footer>
    </div>
)

export default App
