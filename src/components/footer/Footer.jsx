import React from 'react'
import './footer.css'
import { BsInstagram, BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import '../../utils/i18n/i18n'
import { useTranslation } from 'react-i18next'


const Footer = () => {

  const {t} = useTranslation()

  return (
    <footer>
      <a href="#" className='footer__logo'>Ed.Elcio</a>

      <ul className='permalinks'>
        <li><a href="#">{t('Início')}</a></li>
        <li><a href="#about">{t('Sobre')}</a></li>
        <li><a href="#experience">{t('Experiência')}</a></li>
        <li><a href="#services">{t('Serviços')}</a></li>
        <li><a href="#contact">{t('Contato')}</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/edelciobatista/" target="_blank" rel="noopener noreferrer" ><BsLinkedin/></a>
        <a href="https://github.com/EdelcioBatista" target="_blank" rel="noopener noreferrer" ><FaGithub/></a>
        <a href="https://www.instagram.com/edelcio.batista/" target="_blank" rel="noopener noreferrer" ><BsInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Ed.Elcio</small>
      </div>

    </footer>
    
  )
}

export default Footer