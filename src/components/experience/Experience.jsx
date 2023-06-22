import React from 'react'
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './Experience.css'
 
const Experience = () => {

  return (
    <section id='experience'>
      <h5>Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsFillPatchCheckFill />
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>Backend Development</h3>
            <div className="experience_content">
              <article className='experience_details' ></article>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Experience