import React from 'react'
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './Experience.css'
 
const Experience = () => {

  const fontendSkills = [
    { name: 'JavaScript', level: 'Proficient' },
    { name: 'TypeScript', level: 'Proficient' },
    { name: 'ReactJS', level: 'Proficient' },
    { name: 'HTML5', level: 'Proficient' },
    { name: 'CSS3', level: 'Proficient' },
    { name: 'Webpack', level: 'Proficient' },
    { name: 'AngularJS', level: 'Proficient' }, 
    { name: 'React Native', level: 'Experienced' },
    { name: 'jQuery', level: 'Experienced' },
    { name: 'Jest', level: 'Experienced' },
    { name: 'Enzyme', level: 'Experienced' },
  ];

  const backendSkills = [
    
    { name: 'Python', level: 'Proficient' },
    { name: 'SQL', level: 'Proficient' },
    { name: 'PostgreSQL', level: 'Proficient' },
    { name: 'Athena', level: 'Proficient' },
    { name: 'Node.js', level: 'Experienced' },
    { name: 'Express', level: 'Experienced' },
    { name: 'Pytest', level: 'Experienced' },
    { name: 'AWS CDK', level: 'Experienced' },
    { name: 'Glue', level: 'Experienced' },
    { name: 'DynamoDB', level: 'Experienced' },
    { name: 'AWS Lambda', level: 'Experienced' },
    { name: 'CloudFormation', level: 'Experienced' },
    { name: 'S3', level: 'Experienced' },
    { name: 'Docker', level: 'Experienced' },
    { name: 'NoSQL', level: 'Experienced' },
    { name: 'MongoDB', level: 'Experienced' },
  ];

  return (
    <section id='experience'>
      <h5>Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            {fontendSkills.map(({level, name}) => (
              <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details-icon' />
                <div>
                  <h4>{name}</h4>
                  <small className='text-light'>{level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="experience_backend">
          <h3>Backend Development</h3>
            <div className="experience_content">
              {backendSkills.map(({ level, name }) => (
                <article className='experience_details'>
                  <BsFillPatchCheckFill className='experience_details-icon' />
                  <div>
                    <h4>{name}</h4>
                    <small className='text-light'>{level}</small>
                  </div>
                </article>
              ))}
            </div>
          </div>
      </div>
    </section>
  )
}

export default Experience