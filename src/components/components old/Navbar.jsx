import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">
          <svg width="40" height="40" viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg" className="nav-logo">
            <path d="M168.75 104.167C168.75 104.167 166.667 114.583 135.417 156.25C105.208 195.833 148.958 225 154.167 229.167H155.208C161.458 223.958 240.625 173.958 168.75 104.167Z" stroke="white" strokeWidth="10" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M143.75 81.25C143.75 57.2917 134.375 35.4167 125 22.9167C121.875 19.7917 116.667 20.8333 115.625 25C111.458 40.625 98.9583 73.9583 68.75 113.542C30.2083 163.542 65.625 217.708 102.083 228.125C121.875 233.333 96.875 217.708 93.75 185.417C90.625 144.792 143.75 114.583 143.75 81.25Z" stroke="white" strokeWidth="10" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>ByteForge</span>
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          Home
        </Link>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
          About Us
        </Link>
        <Link to="/team" className={location.pathname === '/team' ? 'active' : ''}>
          Team Members
        </Link>
        <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>
          Projects
        </Link>
        <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar; 