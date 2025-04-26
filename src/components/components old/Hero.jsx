import React from 'react';
import './Hero.css';
import ScrambleText from './ScrambleText';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="logo">
        <svg width="250" height="250" viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg" className="custom-logo">
          <path d="M168.75 104.167C168.75 104.167 166.667 114.583 135.417 156.25C105.208 195.833 148.958 225 154.167 229.167H155.208C161.458 223.958 240.625 173.958 168.75 104.167Z" stroke="white" strokeWidth="10" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M143.75 81.25C143.75 57.2917 134.375 35.4167 125 22.9167C121.875 19.7917 116.667 20.8333 115.625 25C111.458 40.625 98.9583 73.9583 68.75 113.542C30.2083 163.542 65.625 217.708 102.083 228.125C121.875 233.333 96.875 217.708 93.75 185.417C90.625 144.792 143.75 114.583 143.75 81.25Z" stroke="white" strokeWidth="10" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <h1>ByteForge</h1>
      <ScrambleText text="Transforming Ideas into Intelligent Outcomes" />
      <p className="description">
         
        We are ByteForge, a dynamic team of passionate IT students driven by
        curiosity, creativity, and a shared goal of forging innovative digital
        solutions. With diverse skill sets spanning software development, UI/UX
        design, and data analysis, we collaborate to turn ideas into impactful tech
        projects.
      </p>
      <p className="mission">
        United by our commitment to learning and growth, ByteForge is where
        code meets purpose, and innovation takes shape.
      </p>
    </section>
  );
};

export default Hero; 