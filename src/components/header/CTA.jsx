import React from 'react'
import CV from '../../assets/pdf/cv-pt.pdf'
import '../../utils/i18n/i18n'
import { useTranslation } from 'react-i18next'

const CTA = () => {

  const {t} = useTranslation()

  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>{t('Vamos conversar')}</a>
    </div>
  )
}

export default CTA