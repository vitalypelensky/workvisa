import React from 'react'
import { useTranslation } from 'react-i18next'

const EmployerPage = () => {
  const { t } = useTranslation()
  return (
    <div>
      <h1>{t('employers.title')}</h1>
    </div>
  )
}

export default EmployerPage
