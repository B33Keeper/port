import React from 'react';
import './Home.css';
import byteforgeLogo from '../assets/byteforge-logo.svg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <main className="main-content">
        <div className="logo-section">
          <img src={byteforgeLogo} alt="ByteForge Logo" className="main-logo" />
          <h1 className="company-name">ByteForge</h1>
        </div>

        <h2 className="tagline">Transforming Ideas into Intelligent Outcomes</h2>

        <div className="description">
          <p>
            We are ByteForge, a dynamic team of passionate IT students driven by
            curiosity, creativity, and a shared goal of forging innovative digital
            solutions. With diverse skill sets spanning software development, UI/UX
            design, and data analysis, we collaborate to turn ideas into impactful tech
            projects.
          </p>
          <p>
            United by our commitment to learning and growth, ByteForge is where
            code meets purpose, and innovation takes shape.
          </p>
        </div>

        <div className="team-gallery">
          {/* Team member images will be added here */}
          <div className="team-member"></div>
          <div className="team-member"></div>
          <div className="team-member"></div>
          <div className="team-member"></div>
          <div className="team-member"></div>
        </div>

        <div className="mission-vision">
          <div className="mission">
            <h3>M</h3>
            <p>
              At ByteForge, our mission is to harness our collective skills,
              creativity, and passion for technology to develop smart, user-centered
              solutions. Through collaboration, continuous learning, and real-world
              application, we aim to grow as IT professionals while making meaningful
              contributions to the digital world.
            </p>
          </div>

          <div className="vision">
            <h3>V</h3>
            <p>
              To become a leading force of innovation among young tech professionals,
              creating impactful solutions that shape the future of technology and
              empower communities.
            </p>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>© ByteForge 2025</p>
      </footer>
    </div>
  );
};

export default Home; 