import React from 'react';
import './Hero.css';
import ScrambleText from './ScrambleText';
import byteforgeLogo from '../assets/byteforge-logo.svg';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="logo-container">
          <img src={byteforgeLogo} alt="ByteForge Logo" className="hero-logo" />
        </div>
        <h1 className="hero-title">
          <ScrambleText text="ByteForge" />
        </h1>
        <h2 className="hero-subtitle">
          <ScrambleText text="Transforming Ideas into Intelligent Outcomes" />
        </h2>

      </div>
    </section>
  );
};

export default Hero; 