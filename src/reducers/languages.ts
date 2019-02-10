import {Action} from 'redux'

interface Language {
    name: string
    flag: string
}

export interface LanguageAction extends Action {
    value: Language
}

const languageList: Array<Language> = [
    { 
        flag: 'GB',
        name: 'English'
    },
    { 
        flag: 'NO',
        name: 'Norsk'
    }
]

const [first] = languageList
export function language (state: Language = first, action: LanguageAction): Language {
    switch(action.type) {
    case 'SET_LANGUAGE':
        return action.value
    }
    return state
}

export function languages (state = languageList): Array<Language> {
    return state
}