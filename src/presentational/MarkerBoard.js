import React from 'react'
import './MarkerBoard.css'

function getMarker (index) {
    if (index === 0) return ''

    const sub = Math.floor(index / 12) * 12
    const subIndex = index - sub

    if (subIndex === 0) return index
    const singles = [3, 5, 7, 9]

    const isSingle = singles.some(x => subIndex / x === 1)
    if (isSingle) return index.toString()
    return ''
}

const MarkerBoard = ({frets}) => (
    <div className='MarkerBoard'>
        <div className='nut'></div>
        {[...Array(frets)].map((_x, i) =>
            <div className="fret" key={i}>
                {getMarker(i + 1)}
            </div>
        )}
    </div>
)

export default MarkerBoard
