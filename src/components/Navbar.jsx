import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="logo-container">
          <img src="/Logo.png" alt="Barb's Free From Cakes" className="logo-img" />
        </a>
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#gallery">Cakes</a></li>
          <li><a href="#about">Story</a></li>
          <li><a href="#contact" className="btn btn-primary btn-sm">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
