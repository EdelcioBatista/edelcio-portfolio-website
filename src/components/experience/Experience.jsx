import React from 'react'
import './experience.css'
import '../../utils/i18n/i18n'
import { useTranslation } from 'react-i18next'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {

  const {t} = useTranslation()

  return (
    <section id='experience'>
      <h5>{t('What skills I have?')}</h5>
      <h2>{t('My knowledge')}</h2>

      <div className="container experience__container">
        {/* START FRONTEND */}
        <div className="experience__frontend">
          
          <h3>{t('Frontend development')}</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>{t('Básico')}</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>{t('Básico')}</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>{t('Básico')}</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>TypeScript</h4>
                <small className='text-light'>{t('Básico')}</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>React JS</h4>
                <small className='text-light'>{t('Básico')}</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Next JS</h4>
                <small className='text-light'>{t('Básico')}</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>SASS</h4>
                <small className='text-light'>{t('Básico')}</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Figma</h4>
                <small className='text-light'>{t('Básico')}</small>
              </div>
            </article>

          </div>
          
        </div>
        {/* END FRONTEND */}

        {/* START BACKEND */}

        <div className="experience__backend">
          
          <h3>{t('Backend development')}</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>{t('Básico')}</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Postgree SQL</h4>
                <small className='text-light'>{t('Básico')}</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>{t('Básico')}</small>
              </div>
            </article>

          </div>
          
        </div>
        {/* END BACKEND */}

        {/* START SOFT SKILLS */}
        <div className="experience__softskills">
          
          <h3>Soft skills</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>{t('Facil aprendizado')}</h4>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>{t('Empatia')}</h4>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>{t('Comunicação efetiva')}</h4>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>{t('Pensamento crítico')}</h4>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>{t('Criatividade')}</h4>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>{t('Atitude para solução de problemas')}</h4>
              </div>
            </article>

        

          </div>
          
        </div>
        {/* END FRONTEND */}

        {/* START education */}
        <div className="experience__education">
          
          <h3>{t('Education')}</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>{t('MBA In Investments')}</h4>
                <small className='text-light'>XP INC / IBMEC SP | 2021 - 2022</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>{t('Bachelors degree in Business Administration')}</h4>
                <small className='text-light'>CUFSA | 2003 - 2006</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>SCRUM (SFPC)</h4>
                <small className='text-light'>Certiprof | 05/2020</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>KANBAN</h4>
                <small className='text-light'>Claro S.A.</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>WHITE BELT LEAN SIX-SIGMA</h4>
                <small className='text-light'>EDTI | Julho/2021 </small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>SIX SIGMA YELLOW BELT</h4>
                <small className='text-light'>6sigmastudy | 07/2021</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>{t('Gastronomy')}</h4>
                <small className='text-light'>:)</small>
              </div>
            </article>

          </div>
          
        </div>
        {/* END education */}

      </div>
    </section>
  )
}

export default Experience