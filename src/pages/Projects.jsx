import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'BudzReserve',
    description:
      'An Online Reservation and Queueing System with Digital Receipt, is a Web Application which focuses on providing a faster, more reliable, and efficient way for users to reserve courts and manage queueing.',
    image: '/projects/budzreserve.png',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
  },
  {
    title: 'RBS POS',
    description:
      'A Point of Sale system for retail businesses, providing inventory management, sales tracking, and digital receipts. Built for efficiency and reliability in daily operations.',
    image: '/projects/rbs-pos.png',
    
    tech: ['Java', 'MySql', 'JSP', 'JDBC'],
  },
  {
    title: 'Teeny Delish Website',
    description:
      'A modern and responsive website for a café specializing in bread and pastries. Built using HTML, CSS, and React.js, it features an interactive menu and a smooth order selection system, allowing users to easily browse and choose their favorite items.',
    image: '/projects/teenydelish.png',
    tech: ['React.js', 'Node.js', 'Express.js', 'MySQL'],
  },
];

const Projects = () => {
  return (
    <section className="projects-page" id="projects">
      <div className="projects-container">
        {projects.map((project, idx) => (
          <div
            className={`project-row ${idx % 2 === 1 ? 'reverse' : ''}`}
            key={idx}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="tech-labels">
                <span>Technologies used:</span>
                <div className="tech-buttons">
                  {project.tech.map((tech, i) => (
                    <button className="tech-btn" key={i}>{tech}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 