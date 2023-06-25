import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { AiTwotoneMail, AiOutlineWhatsApp } from 'react-icons/ai'
import { BsMessenger } from 'react-icons/bs'
import './Contact.css';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sdgojdk', 'template_qvx4o7e', form.current, 'rN9HPL1-BPPh3DpG1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  const contactOptions = [
    {
      icon: <AiTwotoneMail />,
      title: 'Email',
      desc: 'edwinjmenendez@gmail.com',
      sendTo: 'mailto:edwinjmenendez@gmail.com'
    },
    {
      icon: <BsMessenger />,
      title: 'Facebook',
      desc: 'Messenger',
      sendTo: 'https://m.me/edwinmenendez925'
    },
    {
      icon: <AiOutlineWhatsApp />,
      title: 'WhatsApp',
      desc: 'Phone Number',
      sendTo: 'https://api.whatsapp.com/send/?phone=13239448725'
    },
  ]

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          {contactOptions.map((option) => (
            <article className='contact_option'>
              {option.icon}
              <h4>{option.title}</h4>
              <h5>{option.desc}</h5>
              <a href={option.sendTo} target='_blank' >Send a message</a>
            </article>
          ))}
        </div>

        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" placeholder='Your Message' rows="7"></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact