import React from 'react';
import './Projects.scss';
import MusicPlay from '../Images/musicplay.JPG';
import Portfolio from '../Images/portfolio.png';
import Piktura from '../Images/piktura.png';

const projects = [
  {
    title: "Mood music player",
    description:
      "Mood-based indie music player built with React, featuring API integration, animated UI transitions, and a custom vinyl-style audio player.",
    img: MusicPlay,
    link: "https://github.com/erabeqirii/mood-music-player",
  },
  {
    title: "Portfolio",
    description:
      "Designed and developed by me. This portfolio is built with ReactJS and SCSS for modular, responsive styling, creating a visually appealing and maintainable design.",
    img: Portfolio,
    link: "https://github.com/erabeqirii/portfolio",
  },
  {
    title: "Uebsite për Piktura",
    description:
      "My first project using HTML, CSS, and JavaScript. Focused on responsive layout with interactive features for an intuitive user experience.",
    img: Piktura,
    link: "https://github.com/erabeqirii/uebsiteperpiktura",
  },
];

const Projects = () => {
  return (
    <section className="Projects">
      <div className="project-list">
        {projects.map((proj, idx) => (
          <div className="project" key={idx}>
            <div className="project-image">
              <img src={proj.img} alt={proj.title} />
            </div>
            <div className="project-info">
              <h2>{proj.title}</h2>
              <p>{proj.description}</p>
              <a href={proj.link} target="_blank" rel="noopener noreferrer" className="code-link">
                View Code
              </a>
            </div>
          </div>
        ))}
      </div>
      <button
        className="more-button"
        onClick={() =>
          window.open("https://github.com/erabeqirii?tab=repositories", "_blank")
        }
      >More Projects</button>
    </section>
  );
};

export default Projects;
