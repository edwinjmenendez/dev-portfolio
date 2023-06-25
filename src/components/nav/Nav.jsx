import React, { useState } from 'react';

import { BiHomeAlt2 } from 'react-icons/bi';
import { AiOutlineUser } from 'react-icons/ai';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { BsJournalCode } from 'react-icons/bs';
import { BiMessageRounded } from 'react-icons/bi';
import './Nav.css';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  const handleClick = (event) => {
    setActiveNav(event.currentTarget.getAttribute('href'));
  }

  return (
    <nav>
      <a href="#" onClick={handleClick} className={activeNav === '#' ? 'active' : ''} >{<BiHomeAlt2 />}</a>
      <a href="#about" onClick={handleClick} className={activeNav === '#about' ? 'active' : ''} >{<AiOutlineUser />}</a>
      <a href="#experience" onClick={handleClick} className={activeNav === '#experience' ? 'active' : ''} >{<MdOutlineWorkOutline />}</a>
      <a href="#portfolio" onClick={handleClick} className={activeNav === '#services' ? 'active' : ''} >{<BsJournalCode />}</a>
      <a href="#contact" onClick={handleClick} className={activeNav === '#contact' ? 'active' : ''} >{<BiMessageRounded />}</a>
    </nav>
  )
}

export default Nav