import React, { useState, useEffect } from 'react';
import './TypewriterText.css';

const TypewriterText = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length && isTyping) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else if (currentIndex >= text.length) {
      setIsTyping(false);
    }
  }, [currentIndex, text, isTyping]);

  useEffect(() => {
    if (!isTyping) {
      const timeout = setTimeout(() => {
        setDisplayText('');
        setCurrentIndex(0);
        setIsTyping(true);
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [isTyping]);

  return (
    <span className="typewriter">
      {displayText}
      <span className={`cursor ${!isTyping ? 'blink' : ''}`}>|</span>
    </span>
  );
};

export default TypewriterText; 