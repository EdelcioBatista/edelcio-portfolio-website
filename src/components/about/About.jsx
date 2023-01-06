import React from 'react'
import './about.css'
import '../../utils/i18n/i18n'
import { useTranslation } from 'react-i18next'
import ME from '../../assets/img/me.jpg'
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'


const About = () => {

  const {t} = useTranslation()

  return (
    <section id='about'>

      <h5>{t('Conhecer-me')}</h5>
      <h2>{t('Sobre mim')}</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>{t('Experiência')}</h5>
              <small>{t('+ de 30 anos de experiência em projetos de TI')}</small>
            </article>
            
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>{t('Projetos em')}</h5>
              <small>{t('Editoras, Alimentos, Tabacos, Telecom, Autopeças etc')}</small>
            </article>
            
          </div>

          <p>
            {t('description-about-me-1')}
          </p>
          <p>
            {t('description-about-me-2')}
          </p>
          <p>
            {t('description-about-me-3')}
          </p>
          <p>
            {t('description-about-me-4')}
          </p>

          <a href="#contact" className='btn btn-primary'>{t("Vamos conversar")}</a>

      </div>

      </div>

    </section>
  )
}

export default About