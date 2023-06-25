import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Edwin Menendez</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a target='_blank' href="https://www.instagram.com/brothermenendez"><AiOutlineInstagram /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Edwin Menendez Portfolio</small>
      </div>
    </footer>
  )
}

export default Footer