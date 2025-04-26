import React from 'react';
import './About.css';
import { FaCode, FaPaintBrush, FaDatabase, FaCogs } from 'react-icons/fa';
import FadeInSection from './FadeInSection';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-content">
          <FadeInSection>
            <p className="main-description">
              ByteForge is a team of aspiring IT students united by a shared passion for technology, innovation,
              and problem-solving. Formed through our academic journey in Information Technology, we came
              together to collaborate on real-world projects, enhance our technical skills, and bring creative digital
              solutions to life.
            </p>
          </FadeInSection>

          <FadeInSection>
            <p className="purpose-statement">
              Our purpose is to grow not only as individuals but as a team, pushing boundaries and contributing
              to the tech landscape with every project we undertake.
            </p>
          </FadeInSection>

          <FadeInSection>
            <div className="divider"></div>
          </FadeInSection>

          <FadeInSection>
            <p className="expertise-intro">
              Each member of ByteForge brings a unique set of skills to the table, allowing us to cover a
              wide range of IT domains. Our core expertise includes:
            </p>
          </FadeInSection>

          <div className="expertise-grid">
            <FadeInSection>
              <div className="expertise-card">
                <FaCode className="expertise-icon" />
                <h3>Web Application Development</h3>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="expertise-card">
                <FaPaintBrush className="expertise-icon" />
                <h3>UI/UX Design</h3>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="expertise-card">
                <FaDatabase className="expertise-icon" />
                <h3>Database Management</h3>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="expertise-card">
                <FaCogs className="expertise-icon" />
                <h3>Software Engineering and Project Management</h3>
              </div>
            </FadeInSection>
          </div>

          <FadeInSection>
            <p className="closing-statement">
              Our focus lies in developing innovative tech solutions with real-world applications,
              continually learning, and adapting to emerging technologies. ByteForge is not just a team
              —we are a forge where ideas become innovation.
            </p>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default About; 