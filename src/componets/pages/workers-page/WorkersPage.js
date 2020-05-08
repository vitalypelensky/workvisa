import React from 'react'
import { useTranslation } from 'react-i18next'

const WorkersPage = () => {
    const { t } = useTranslation()
    return (
        <div>
            <h1>{t('workers.title')}</h1>
        </div>
    )
}

export default WorkersPage
