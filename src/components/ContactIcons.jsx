// src/components/ContactIcons.jsx
import React from 'react';
import styles from '../styles/ContactIcons.module.css';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const contacts = [
  {
    name: 'Gmail',
    icon: <FaEnvelope />,
    link: 'mailto:adityarajkar1105@gmail.com',
  },
  {
    name: 'GitHub',
    icon: <FaGithub />,
    link: 'https://github.com/TRITUSLegend',
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedin />,
    link: 'https://www.linkedin.com/in/adityarajkar/',
  },
  {
    name: 'Instagram',
    icon: <FaInstagram />,
    link: 'https://www.instagram.com/ark11_05/',
  },
];

const ContactIcons = () => {
  return (
    <section id="contact" className={styles.contact}>
      <h2 className={styles.heading}>Let's Connect</h2>
      <div className={styles.cardContainer}>
        {contacts.map((c, i) => (
          <a
            href={c.link}
            key={i}
            className={styles.card}
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.icon}>{c.icon}</div>
            <div className={styles.label}>{c.name}</div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ContactIcons;
