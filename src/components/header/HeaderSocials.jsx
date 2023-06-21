import React from 'react'

import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { FaReact } from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className='header_socials' >
        <a href="https://www.linkedin.com/in/edwinmenendez/" target='blank'>{<BsLinkedin />}</a>
        <a href="https://github.com/edwinjmenendez/" target='blank'>{<BsGithub />}</a>
        <a href="https://reactime.io/" target='blank' >{<FaReact />}</a>
    </div>
  )
}

export default HeaderSocials