import React from 'react';
import './Contact.scss';
import LinkedIn from '../Images/linkedin.png';
import GitHub from '../Images/github.png';

const Contact = () => {
  return (
    <div className='Contact'>
      <div className='contact-list'>
           <p><span className="field">Email:</span> era.r.beqiri@gmail.com</p>
           <p><span className="field">Phone Number:</span> +38348118678</p>   
      </div>
      <div className='socials'>
        <a href="https://www.linkedin.com/in/era-beqiri-988845226/" target="_blank" rel="noreferrer"><img src={LinkedIn} alt="LinkedIn"/></a>
        <a href="https://github.com/erabeqirii" target="_blank" rel="noreferrer"><img src={GitHub} alt="Github"/></a>
      </div>
    </div>
  )
}


export default Contact;
