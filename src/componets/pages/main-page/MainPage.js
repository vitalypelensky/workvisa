import React from 'react'
import { useTranslation } from 'react-i18next'
import Carousel from '../../elements/Carousel'

const MainPage = () => {
  const { t } = useTranslation()

  return (
    <div>
      <h1>{t('main.title')}</h1>
      <Carousel />
    </div>
  )
}

export default MainPage
