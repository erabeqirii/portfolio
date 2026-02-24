import React, { useState, useEffect } from 'react';
import './Header.scss';
import '../Images/logo.png';
import Computer from '../Images/computer.png';

const Header = () => {
const Typewriter = ({ text, speed = 100, delay = 5000 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else {
      // Wait 5 seconds, then reset
      const timeout = setTimeout(() => {
        setDisplayedText('');
        setIndex(0);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed, delay]);

  return <div>{displayedText || "\u00A0"}</div>;
};

  return (
    <div className="banner">
        <div className="content">
            <h1>Era's portfolio</h1>
            <p>Welcome, enjoy your stay!</p>
            <div className="skills">
              <Typewriter text="Turning ideas into Web Solutions." speed={100} delay={5000} />
            </div>
        </div>
        <div className="image-container">
            <img src={Computer} alt="Computer Setup" className="computer-image" />
        </div>
    </div>
  )
}

export default Header