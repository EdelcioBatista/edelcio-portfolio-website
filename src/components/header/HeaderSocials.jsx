import React from 'react'
import { BsLinkedin, BsInstagram } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/edelciobatista/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/EdelcioBatista" target='_blank'><FaGithub/></a>
        <a href="https://www.instagram.com/edelcio.batista/" target='_blank'><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials