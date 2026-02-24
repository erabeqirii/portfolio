import React from 'react';
import './About.scss';
import Era from '../Images/era.png';


const About = () => {
  return (
    <section className="About">
      <div className="description">

        <div className="text-description">
          <h1>About Me</h1>

          <h2>Era Beqiri</h2>
          <h3>Full Stack Developer (Front-End Focused)</h3>


          <div className="details">
          <p className="summary">
            Passionate about coding and detail-oriented, I thrive on finding creative solutions to challenging problems.
          </p>
            <p><strong>Education:</strong> BSc in Computer Science</p>
            <p><strong>Location:</strong> Prishtinë</p>
          </div>

          <h1>My Skills</h1>
          <div className="skills">
            <span>React JS</span>
            <span>Angular</span>
            <span>ASP.NET MVC / Web Api</span>
            <span>SQL Server</span>
          </div>
        </div>

        <div className="photo">
          <img src={Era} alt="Era Beqiri" />
        </div>

      </div>
    </section>
  );
};

export default About;