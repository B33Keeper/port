import React, { useState, useEffect } from 'react';
import './TypewriterText.css';

const TypewriterText = ({ text, delay = 300, pauseTime = 2000 }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let timeoutId;
    let currentIndex = 0;
    let isErasing = false;
    let pauseTimeoutId;

    const updateText = () => {
      if (!isErasing) {
        // Typing
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          currentIndex++;
          timeoutId = setTimeout(updateText, delay);
        } else {
          // Pause at full text
          pauseTimeoutId = setTimeout(() => {
            isErasing = true;
            updateText();
          }, pauseTime);
        }
      } else {
        // Start over from first letter
        currentIndex = 1;
        isErasing = false;
        setDisplayText(text[0]);
        timeoutId = setTimeout(updateText, delay);
      }
    };

    // Start the animation
    setDisplayText(text[0]);
    currentIndex = 1;
    timeoutId = setTimeout(updateText, delay);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(pauseTimeoutId);
    };
  }, [text, delay, pauseTime]);

  return (
    <div className="typewriter">
      {displayText}
      <span className="cursor"></span>
    </div>
  );
};

export default TypewriterText; 