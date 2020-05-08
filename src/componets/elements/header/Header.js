import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
import { useTranslation } from 'react-i18next'
import LanguagesSelector from '../LanguagesSelector'

const Header = () => {
  const { t } = useTranslation()
  return (
    <header className="header">
      <LanguagesSelector/>
      <nav className="navigation">
        <li><Link to='/'>{t('navigation.home')}</Link></li>
        <li><Link to='/employers'>{t('navigation.employers')}</Link></li>
        <li><Link to='/workers'>{t('navigation.workers')}</Link></li>
      </nav>
    </header>
  )
}

export default Header
