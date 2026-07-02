import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ''}`}>
      <span className={styles.logo}>&gt; ADITYA_RAJ_KAR</span>

      <div className={styles.navRight}>
        <a
          href="https://github.com/TRITUSLegend"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconBtn}
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/adityarajkar"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconBtn}
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://www.instagram.com/ark11_05/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconBtn}
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <Link
          to="contact"
          smooth={true}
          duration={600}
          offset={-60}
          className={styles.contactBtn}
        >
          [ CONTACT ]
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
