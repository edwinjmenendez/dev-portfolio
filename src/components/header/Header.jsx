import React from 'react'
import './Header.css';

import CTA from './CTA';
import ProfilePic from '../../assets/ai.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I am</h5>
        <h2>Edwin Menendez</h2>
        <h5>Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        
        <div className="profile_pic">
          <img src={ProfilePic} alt="profile picture" />
        </div>

        <a href="#contact" className='scroll_down' >Scroll Down</a>
      </div>
    </header>
  )
}

export default Header