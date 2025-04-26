import React from 'react';
import './Mission.css';
import TypewriterText from './TypewriterText';

const Mission = () => {
  return (
    <section className="mission-section" id="mission">
      <div className="mission-container">
        {/* Mission: Header on left, text on right */}
        <div className="mission-block">
          <div className="header-container">
            <TypewriterText text="MISSION" delay={400} pauseTime={3000} />
          </div>
          <div className="content-container">
            <p>
              At ByteForge, our mission is to harness our
              collective skills, creativity, and passion for
              technology to develop smart, user-centered
              solutions. Through collaboration, continuous
              learning, and real-world application, we aim to
              grow as IT professionals while making meaningful
              contributions to the digital world.
            </p>
          </div>
        </div>
        
        {/* Vision: Text on left, header on right */}
        <div className="vision-block">
          <div className="content-container">
            <p>
              To become a leading force of innovation among
              young tech professionals, creating impactful
              solutions that shape the future of technology and
              empower communities.
            </p>
          </div>
          <div className="header-container">
            <TypewriterText text="VISION" delay={400} pauseTime={3000} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission; 