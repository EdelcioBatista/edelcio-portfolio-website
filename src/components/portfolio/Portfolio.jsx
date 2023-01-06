import React from 'react'
import './portfolio.css'
import '../../utils/i18n/i18n'
import { useTranslation } from 'react-i18next'
import PORT1 from '../../assets/img/portfolio-1.png'
import PORT2 from '../../assets/img/portfolio-2.png'
import PORT3 from '../../assets/img/portfolio-3.png'
import PORT4 from '../../assets/img/portfolio-4.png'
import PORT5 from '../../assets/img/portfolio-5.png'

const Portfolio = () => {

    const {t} = useTranslation() 

  return (
    <section id='portfolio'>
        <h5>{t('Meus trabalhos')}</h5>
        <h2>{t('Portfólio')}</h2>

        <div className="container portfolio__container">
            <article className='portfolio__item'>
                <div className="portfolio__item-image">
                    <img src={PORT1} alt="portfolio 1" />
                </div>
                <h3>{t('Website pessoal com portfólio')}</h3>
                <div className="portfolio__item-cta">
                    <a href="https://github.com/EdelcioBatista" className='btn' target='_blank' rel="noreferrer">Github</a>
                    <a href="https://edelcio-modelo-2.netlify.app/" className='btn btn-primary' target='_blank' rel="noreferrer">{t('Demonstração')}</a>
                </div>
            </article>

            <article className='portfolio__item'>
                <div className="portfolio__item-image">
                    <img src={PORT2} alt="portfolio 2" />
                </div>
                <h3>{t('Website pessoal com portfólio')}</h3>
                <div className="portfolio__item-cta">
                    <a href="https://github.com/EdelcioBatista" className='btn' target='_blank' rel="noreferrer">Github</a>
                    <a href="https://edelcio-modelo-1.netlify.app/" className='btn btn-primary' target='_blank' rel="noreferrer">{t('Demonstração')}</a>
                </div>
            </article>

            <article className='portfolio__item'>
                <div className="portfolio__item-image">
                    <img src={PORT3} alt="portfolio 3" />
                </div>
                <h3>{t('PrimeFlix')}</h3>
                <div className="portfolio__item-cta">
                    <a href="https://github.com/EdelcioBatista/primeflix" className='btn' target='_blank' rel="noreferrer">Github</a>
                    <a href="https://edelcio-primeflix.netlify.app/" className='btn btn-primary' target='_blank' rel="noreferrer">{t('Demonstração')}</a>
                </div>
            </article>

            <article className='portfolio__item'>
                <div className="portfolio__item-image">
                    <img src={PORT4} alt="portfolio 4" />
                </div>
                <h3>{t('Quadro de tarefas')}</h3>
                <div className="portfolio__item-cta">
                    <a href="https://github.com/EdelcioBatista/board" className='btn' target='_blank' rel="noreferrer">Github</a>
                    <a href="https://board-edelcio.netlify.app/" className='btn btn-primary' target='_blank' rel="noreferrer">{t('Demonstração')}</a>
                </div>
            </article>

            <article className='portfolio__item'>
                <div className="portfolio__item-image">
                    <img src={PORT5} alt="portfolio 5" />
                </div>
                <h3>{t('Protótipo navegável para empresa de mudanças')}</h3>
                <div className="portfolio__item-cta">
                    <a href="https://www.figma.com/proto/ntiSg3AsLZB467EmoGP4UZ/Move?node-id=9%3A76&starting-point-node-id=9%3A76" className='btn btn-primary' target='_blank' rel="noreferrer">{t('Demonstração')}</a>
                </div>
            </article>

           


            
        </div>
    </section>
  )
}

export default Portfolio