import {tuning, tuningModalOpen, tuningOptions} from './tuning'

const initAction = {type: '@@INIT'}
const standardETuning = {
    name : 'Standard E',
    value: ['E', 'A', 'D', 'G', 'B', 'E']
}

describe('tuning reducer', () => {
    it('uses Standard E tuning by default', () => {
        const state = tuning(undefined, initAction)
        expect(state).toEqual(standardETuning)
    })

    it('returns the provided tuning when SET_TUNING is dispatched', () => {
        const dropD = {
            name : 'Drop D',
            value: ['D', 'A', 'D', 'G', 'B', 'E']
        }
        const state = tuning(undefined, {type: 'SET_TUNING', value: dropD})
        expect(state).toEqual(dropD)
    })
})

describe('tuningOptions reducer', () => {
    it('keeps Standard E as the first available tuning option', () => {
        const [firstOption] = tuningOptions(undefined, initAction)
        expect(firstOption).toEqual(standardETuning)
    })
})

describe('tuningModalOpen reducer', () => {
    it('toggles its boolean state when TOGGLE_TUNING_MODAL_OPEN is dispatched', () => {
        const initial = tuningModalOpen(undefined, initAction)
        const toggled = tuningModalOpen(initial, {type: 'TOGGLE_TUNING_MODAL_OPEN'})
        expect(toggled).toBe(!initial)
    })
})
