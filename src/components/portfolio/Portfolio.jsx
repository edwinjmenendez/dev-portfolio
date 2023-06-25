import React from 'react'
import './Portfolio.css';
import img1 from '../../assets/portfolio1.jpg'
import img2 from '../../assets/portfolio2.jpg'
import img3 from '../../assets/portfolio4.jpg'
import img4 from '../../assets/portfolio5.png'
import img5 from '../../assets/portfolio6.jpg'
import img6 from '../../assets/download.png'

const Portfolio = () => {

  const projects = [
    // { img: img1, project: 'App' },
    // { img: img2, project: 'App' },
    // { img: img3, project: 'App' },
    // { img: img4, project: 'App' },
    { img: img5, project: 'TeaMZ' },
    { img: img6, project: 'Fitness Tracker' },
  ]

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {projects.map((project, index) => (
          <article key={index} className='portfolio_item'>
            <div className="portfolio_item-image">
              <img src={project.img} alt="" />
            </div>
            <h3>{project.project}</h3>
            <div className="portfolio_item-cta">
              <a href="https://github.com/edwinjmenendez" className='btn' target='_blank'>Github</a>
              <a href="https://github.com/edwinjmenendez" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Portfolio