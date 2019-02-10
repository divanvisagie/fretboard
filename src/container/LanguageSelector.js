import React, {useState} from 'react'
import { DropdownMenu, DropdownItem, DropdownToggle, ButtonGroup, Button, ButtonDropdown } from 'reactstrap'

import Flag from 'react-flagkit'
import { connect } from 'react-redux'

import './LanguageSelector.scss'

const Component = ({language, languages, setLanguage}) => {
    const [open, setOpen] = useState(false)
    return (
        <div className='LanguageSelector'>
            <ButtonDropdown isOpen={open} toggle={() => setOpen(!open)}>
                <DropdownToggle caret>
                    <Flag country={language.flag}/>
                </DropdownToggle>
                <DropdownMenu>
                    {languages.map((language, key) =>
                        <DropdownItem key={key} onClick={() => setLanguage(language)}>
                            <Flag country={language.flag} /> &nbsp;{language.name}
                        </DropdownItem>
                    )}
                </DropdownMenu>
            </ButtonDropdown>
        </div>)
}

const mapStateToProps = (state) => {
    const { language, languages } = state
    return {
        language,
        languages
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setLanguage (language) {
            dispatch({
                type : 'SET_LANGUAGE',
                value: language
            })
        }
    }
}

const LanguageSelector = connect(
    mapStateToProps,
    mapDispatchToProps
)(Component)

export default LanguageSelector
