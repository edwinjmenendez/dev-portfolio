import React from 'react';
import './Services.css';
import Service from './Service';

const Services = () => {

  const services = [
    {
      service: 'UI/UX Design',
      descriptions: [
        { description: 'Lorem ipsum dolor sit amet consectetur' },
        { description: 'Lorem ipsum dolor sit amet consectetur' },
        { description: 'Lorem ipsum dolor sit amet consectetur' },
        { description: 'Lorem ipsum dolor sit amet consectetur' },
        { description: 'Lorem ipsum dolor sit amet consectetur' },
      ],
    },
    {
      service: 'Web Development',
      descriptions: [
        { description: 'Lorem ipsum dolor sit amet consectetur' },
        { description: 'Lorem ipsum dolor sit amet consectetur' },
        { description: 'Lorem ipsum dolor sit amet consectetur' },
        { description: 'Lorem ipsum dolor sit amet consectetur' },
        { description: 'Lorem ipsum dolor sit amet consectetur' },
        { description: 'Lorem ipsum dolor sit amet consectetur' },
      ],
    },
    {
      service: 'Content Creation',
      descriptions: [
        { description: 'Lorem ipsum dolor sit amet consectetur' },
        { description: 'Lorem ipsum dolor sit amet consectetur' },
        { description: 'Lorem ipsum dolor sit amet consectetur' },
        { description: 'Lorem ipsum dolor sit amet consectetur' },
        { description: 'Lorem ipsum dolor sit amet consectetur' },
      ],
    },
  ];

  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        {services.map((service, index) => (
          <Service key={index} service={service} />
        ))}
      </div>
    </section>
  )
}

export default Services