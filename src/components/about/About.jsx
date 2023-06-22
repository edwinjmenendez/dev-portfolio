import React from 'react'
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { AiOutlineFolderOpen } from 'react-icons/ai';
import './About.css';
import AboutMeImage from '../../assets/smile.png'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={AboutMeImage} alt="About Image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>3+ years working</small>
            </article>
            <article className="about_card">
              <FiUsers className='about_icon' />
              <h5>Clients</h5>
              <small>300+ worldwide</small>
            </article>
            <article className="about_card">
              <AiOutlineFolderOpen className='about_icon' />
              <h5>Projects</h5>
              <small>80+ completed</small>
            </article>
          </div>
          <div className='about_me-paragraph'>
            <p>
            Passionate about coding and sports? Let's connect! 
            Drop me a message to discuss JavaScript, React, 
            sports highlights, or fitness accomplishments.
            </p>
            <p>
            Technical: Software engineer with expertise in Javascript, 
            Typescript, Python, SQL, Webpack, and NoSQL. Passionate 
            about modern JavaScript stack with emphasis on React, 
            Angular, Node.js, and Express to build engaging, 
            scalable applications. Active contributor in the 
            open source community.
            </p>
            <p>
            Hobbies: Huge sports fan, traveler and fitness 
            fanatic.
            </p>
          </div>
          <a href="#contact" className='btn btn-primary' >Send message</a>
        </div>
      </div>
    </section>
  )
}

export default About