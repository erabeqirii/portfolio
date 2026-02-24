import React, { useState, useRef } from 'react';
import './App.css';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Header from './Header/Header';
import Menu from './Menu/Menu';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className='landing'>
      <Menu 
        aboutRef={aboutRef} 
        projectsRef={projectsRef} 
        setActiveSection={setActiveSection} 
      />
      <Header />
      <div className='buttons-div'>
        <button
          className={`about-button ${activeSection === 'about' ? 'active' : ''}`}
          onClick={() => setActiveSection('about')}>
          ABOUT
        </button>
        <button
          className={`projects-button ${activeSection === 'projects' ? 'active' : ''}`}
          onClick={() => setActiveSection('projects')}>
          PROJECTS
        </button>
      </div>

      <div ref={aboutRef}>
        {activeSection === 'about' && <About />}
      </div>
      <div ref={projectsRef}>
        {activeSection === 'projects' && <Projects />}
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}

export default App;
