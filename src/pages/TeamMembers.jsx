import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import './TeamMembers.css';

const TeamMembers = () => {
  const teamMembers = [
    {
      name: "Ivan Louise Cielo",
      role: "Project Manager & QA Lead",
      skills: [
        "Agile/Scrum methodology",
        "Task and time management",
        "Software testing and debugging",
        "Documentation and user manual writing",
        "Client communication and presentation"
      ],
      image: "/team/ivan.png"
    },
    {
      name: "Jersey Anne Nabal",
      role: "Back End Developer",
      skills: [
        "PHP, Node.js, Express.js",
        "MySQL, MongoDB",
        "API development and integration",
        "Software ethics & information systems",
        "Server-side logic and database optimization"
      ],
      image: "/team/jersey.png"
    },
    {
      name: "Filbert Dela Cruz",
      role: "Full Stack Developer",
      skills: [
        "HTML, CSS, JavaScript, React, Vue.js",
        "Node.js, Express, Python",
        "RESTful API development",
        "Development using MERN Stack and Netlify",
        "Git version control"
      ],
      image: "/team/miguel.png"
    },
    {
      name: "Patrick Raymond P. Benito",
      role: "Full Stack Developer",
      skills: [
        "HTML, CSS, JavaScript, React, Vue.js",
        "Node.js, Express, Python",
        "RESTful API and real-time databases",
        "Development using MERN Stack and Netlify",
        "Git version control"
      ],
      image: "/team/patrick.png"
    },
    {
      name: "Malachi Lama",
      role: "Front End Developer",
      skills: [
        "HTML, CSS, JavaScript, React",
        "UI/UX design principles",
        "Responsive design and mobile-first",
        "Responsive design and accessibility",
        "Interactive web applications"
      ],
      image: "/team/malachi.png"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000); // Changed from 5000 to 3000 milliseconds

    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => 
        prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
      );
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
      );
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  return (
    <div className="team-members-page">
      
      <div className="carousel-container">
        <div className="carousel-content">
          <div className={`member-card ${isTransitioning ? 'transitioning' : ''}`}>
            <div className="member-info">
              <h1>Our Team</h1>
              <h2>{teamMembers[currentIndex].name}</h2>
              <h3>{teamMembers[currentIndex].role}</h3>
              <ul className="skills-list">
                {teamMembers[currentIndex].skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
              <div className="social-links">
                <span>Socials:</span>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
              </div>
            </div>
            <div className="member-image">
              <img 
                src={teamMembers[currentIndex].image} 
                alt={teamMembers[currentIndex].name}
              />
            </div>
          </div>
        </div>
        
        <button className="carousel-button prev" onClick={prevSlide}>
          &#8249;
        </button>
        <button className="carousel-button next" onClick={nextSlide}>
          &#8250;
        </button>

        <div className="carousel-indicators">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true);
                  setCurrentIndex(index);
                  setTimeout(() => setIsTransitioning(false), 500);
                }
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMembers; 