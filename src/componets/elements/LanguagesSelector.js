import React from 'react'
import { useTranslation } from 'react-i18next'

const  LanguagesSelector  = () => {
    const { t, i18n } = useTranslation()

    const languages = [
        {
            value: 'pl',
            name: t('languages.polska')
        },
        {
            value: 'ru',
            name: t('languages.russian')
        },
    ]

    const changeLanguage = (e) => {
        i18n.changeLanguage(e.target.value)
    }
    return (
        <div>
            <select onInput={changeLanguage}>
                {
                    languages.map(language => <option value={language.value} key={language.value}>{language.name}</option>)
                }
            </select>
        </div>
    )
}

export default LanguagesSelector
