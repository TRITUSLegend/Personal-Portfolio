// src/components/About.jsx
import React from 'react';
import styles from '../styles/About.module.css';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.bgGlow} />

      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2 className={styles.heading}>-About Me-</h2>
        <p className={styles.description}>
  I'm <strong>Aditya Raj Kar</strong>, an aspiring software developer currently pursuing B.Tech in Computer Science and Engineering (IoT) at VIT Vellore. 
  I'm passionate about building efficient, scalable solutions through code and constantly improving my DSA and development skills. 
  I enjoy working on real-world projects, exploring the world of IoT and automation, and continuously learning new technologies.
  <br /><br />
  Currently, I’m diving into the fundamentals of <strong>Cybersecurity</strong> through professional certification courses to build a strong understanding of secure systems and ethical practices.
</p>

      </motion.div>
    </section>
  );
};

export default About;
