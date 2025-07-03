// src/components/Navbar.jsx
import React from 'react';
import styles from '../styles/Navbar.module.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Aditya</div>
      <ul className={styles.navLinks}>
        <li><Link to="hero" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={500}>About</Link></li>
        <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
        <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
        <li><Link to="experience" smooth={true} duration={500}>Experience</Link></li>
        <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
