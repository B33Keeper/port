import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleAnchorClick = (e, anchor) => {
    e.preventDefault();
    const el = document.getElementById(anchor);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    } else if (location.pathname !== '/') {
      // If not on home, go home and then scroll after navigation
      window.location.href = `/#${anchor}`;
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">ByteForge</Link>
        </div>
        
        <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#home" className="nav-link" onClick={e => handleAnchorClick(e, 'home')}>Home</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={e => handleAnchorClick(e, 'about')}>About Us</a>
          </li>
          <li className="nav-item">
            <a href="#mission" className="nav-link" onClick={e => handleAnchorClick(e, 'mission')}>Mission Vission</a>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link" onClick={() => setIsOpen(false)}>Projects</Link>
          </li>
          <li className="nav-item">
            <a href="contact" className="nav-link" onClick={e => handleAnchorClick(e, 'contact')}>Contact Us</a>
          </li>
          <li className="nav-item">
            <Link to="/team-members" className="nav-link" onClick={() => setIsOpen(false)}>Team Members</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 