import React from 'react';
import Logo from '../Images/logo.png';
import './Menu.scss';

const Menu = ({ aboutRef, projectsRef, setActiveSection }) => {
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='menu'>
      <img src={Logo} alt="Logo" />
      <div className='menu-items'>
        <a href="#about" 
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(aboutRef);
            setActiveSection('about');
          }}> About </a>
        <a href="#projects" 
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(projectsRef);
            setActiveSection('projects');
          }}> Projects </a>
      </div>
    </div>
  );
}

export default Menu;
