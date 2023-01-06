import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp, BsInstagram } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import '../../utils/i18n/i18n'
import { useTranslation } from 'react-i18next'

const Contact = () => {

  const {t} = useTranslation()
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_u4xqxbg', 'template_2fpha2q', form.current, '0TGsjbTB6SdPQV4O2')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };


  return (
  
    <section id='contact'>
      <h5>{t('Entrar em contato')}</h5>
      <h2>{t('Fale comigo')}</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>edelciobatista@hotmail.com</h5>
            <a href="mailto:edelciobatista@hotmail.com" target='_blank' rel="noopener noreferrer">{t('Send message')}</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+55 11 99999 9999</h5>
            <a href="https://api.whatsapp.com/send?phone=5511976425741" target='_blank' rel="noopener noreferrer">{t('Send a Whats')}</a>
          </article>

          <article className="contact__option">
            <BsInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>@edelcio.batista</h5>
            <a href="https://www.instagram.com/edelcio.batista/" target='_blank' rel="noopener noreferrer">{t('Follow me')}</a>
          </article>


        </div>
        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder={t('Seu nome completo')} required />
          <input type="email" name='email' placeholder={t('Seu email')} required />
          <textarea name='message' rows='7' placeholder={t('Sua mensagem')} required ></textarea>
          <button type='submit' className='btn btn-primary'>{t('Enviar')}</button>

        </form>
        
      </div>

    </section>
    
  )
}

export default Contact