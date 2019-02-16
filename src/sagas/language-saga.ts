import {put, takeLatest, select, call} from 'redux-saga/effects'
import {LanguageAction} from '../reducers/languages'

function * updateTranslations (action: LanguageAction) {

    console.log('translate')
    
    const url = `/translations/${action.value.flag.toLocaleLowerCase()}.json`
    
    const response = yield call(fetch,url)
    const responseBody = yield call([response, 'json'])
    
    yield put({
        type: 'SET_TRANSLATIONS',
        value: responseBody
    })
}

function * setLanuageSaga () {
    yield takeLatest('SET_LANGUAGE', updateTranslations)
}

export {
    setLanuageSaga
}
