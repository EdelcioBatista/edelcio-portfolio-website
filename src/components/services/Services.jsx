import React from 'react'
import './services.css'
import '../../utils/i18n/i18n'
import { useTranslation } from 'react-i18next'
import { BiCheck } from 'react-icons/bi'

const Services = () => {

  const {t} = useTranslation()
  
  return (
    <section id='services'>
      <h5>O que eu ofereço?</h5>
      <h2>Serviços freelance</h2>

      <div className="container services__container">

        <article className='service'>
          <div className="service__head">
            <h3>Você receberá</h3>         
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Um rascunho (wireframe) de baixo nível</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Um protótipo simples</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Um protótipo navegável</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Seu produto de internet em produção</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Se você desejar, um cuidado mensal para manter seu produto em funcionamento</p>
            </li>

          </ul>
        </article>



      </div>
    </section>
  )
}

export default Services