import React, { useState, useEffect } from 'react';
import './ScrambleText.css';

const ScrambleText = ({ text }) => {
  const [displayText, setDisplayText] = useState(text);
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  
  useEffect(() => {
    let iteration = 0;
    const maxIterations = 10;
    let interval;

    const scramble = () => {
      if (iteration >= maxIterations) {
        clearInterval(interval);
        setDisplayText(text);
        return;
      }

      setDisplayText(prev => 
        text.split('').map((char, index) => {
          if (char === ' ') return ' ';
          const randomChar = characters[Math.floor(Math.random() * characters.length)];
          const shouldScramble = Math.random() < 0.5;
          return shouldScramble ? randomChar : char;
        }).join('')
      );

      iteration++;
    };

    const startAnimation = () => {
      iteration = 0;
      interval = setInterval(scramble, 100);
    };

    // Start animation on hover
    const element = document.querySelector('.scramble-text');
    element?.addEventListener('mouseenter', startAnimation);

    return () => {
      element?.removeEventListener('mouseenter', startAnimation);
      clearInterval(interval);
    };
  }, [text]);

  return (
    <h2 className="scramble-text">
      {displayText}
    </h2>
  );
};

export default ScrambleText; 