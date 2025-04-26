import React, { useState, useEffect } from 'react';
import './ScrambleText.css';

const ScrambleText = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

  useEffect(() => {
    let iteration = 0;
    const maxIterations = 10;
    
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (index < iteration / 3) {
              return text[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join('')
      );

      if (iteration >= maxIterations * 3) {
        clearInterval(interval);
        setDisplayText(text);
      }

      iteration += 1;
    }, 30);

    return () => clearInterval(interval);
  }, [text]);

  return <span className="scramble-text">{displayText}</span>;
};

export default ScrambleText; 