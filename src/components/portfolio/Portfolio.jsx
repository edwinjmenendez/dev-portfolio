import React from 'react'
import './Portfolio.css';
import img1 from '../../assets/download.jpeg'
import img2 from '../../assets/portfolio1.jpg'
import img3 from '../../assets/petmatch.jpeg'
import wheel from '../../assets/wheel.png'

const Portfolio = () => {

  const projects = [
    {
      img: img1,
      project: 'Reactime',
      githubLink: 'https://github.com/edwinjmenendez/reactime',
      link: 'https://reactime.io/'
    },
    {
      img: wheel,
      project: 'Foodie Roulette',
      githubLink: 'https://github.com/edwinjmenendez/wheel-of-fortune',
      link: 'https://foodieroulette.onrender.com/'
    },
    {
      img: img2,
      project: 'Fairpay',
      githubLink: 'https://github.com/edwinjmenendez/fairpay',
      link: null
    },
    // {
    //   img: img3,
    //   project: 'Pet-Match',
    //   githubLink: 'https://github.com/pet-match/pet-matcher'
    // },
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
              <a href={project.githubLink} className='btn' target='_blank'>Github</a>
              {project.link && <a href={project.link} className='btn btn-primary' target='_blank'>Demo</a>}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Portfolio