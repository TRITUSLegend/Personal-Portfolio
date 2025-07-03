// src/components/Footer.jsx
import React from 'react';
import styles from '../styles/Footer.module.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        {/* Left - Bio and Icons */}
        <div className={styles.column}>
          <h3 className={styles.name}>Aditya Raj Kar</h3>
          <p className={styles.bio}>
            Passionate about building intuitive, scalable software solutions in IoT, web, and cybersecurity.
          </p>
          <div className={styles.socialIcons}>
            <a href="https://github.com/TRITUSLegend" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/adityarajkar/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="mailto:adityarajkar1105@gmail.com"><FaEnvelope /></a>
            <a href="https://www.instagram.com/ark11_05/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>

        {/* Center - Quick Links */}
        <div className={styles.column}>
          <h4>Quick Links</h4>
          <ul className={styles.links}>
            <li><a href="#hero">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Right - Contact */}
        <div className={styles.column}>
          <h4>Contact</h4>
          <p><FaEnvelope className={styles.icon} /> adityarajkar1105@gmail.com</p>
          <p><span className={styles.icon}>📍</span> Vellore, India</p>
        </div>
      </div>

      <hr className={styles.divider} />

      <p className={styles.copyright}>
        &copy; {new Date().getFullYear()} Aditya Raj Kar. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
