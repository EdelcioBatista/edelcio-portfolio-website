import React from 'react'
import Typewriter from 'typewriter-effect'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import '../../utils/i18n/i18n'
import { useTranslation } from 'react-i18next'

const Header = () => {

  const {t, i18n} = useTranslation()

  const changeLanguage = value => {
    i18n.changeLanguage(value)
  }

  const euSou1 = t('desenvolvedor')
  const euSou2 = t('especialista')
  const euSou3 = t('entusiasta em tecnologia')
  const euSouFinal = t('cozinheiro ;)')

  return (
    <header>
      <div className="container header__container">
        <h5>{t('Olá, eu sou')}</h5>
        <h1>Edelcio Batista,</h1>
        <h2>{t('e eu também sou')}</h2>
        
        <div className="text">
          
          <Typewriter
            options={{autoStart: true,
            loop: true,
            delay: 40,
            strings:[
              euSou1,
              euSou2,
              euSou3,
              euSouFinal
            ]  
          }}
          />
          
        </div>
        <CTA />
        <HeaderSocials />

        <div className='header__languages'>
          <a href="#" onClick={() => changeLanguage('ptbr')}>Pt</a>
          <a href="#" onClick={() => changeLanguage('en')}>En</a>
        </div>
        
      </div>
    </header>
  )
}

export default Header