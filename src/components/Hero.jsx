// src/components/Hero.jsx
import React from 'react';
import styles from '../styles/Hero.module.css';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section
      id="hero"
      className={styles.hero}
      style={{ position: 'relative', minHeight: '100vh' }}
    >
      <div className={styles.overlay} />

      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        style={{ position: 'relative', zIndex: 1 }}
      >
        <h1 className={styles.heading}>
          Hi, I'm{' '}
          <span className={styles.name}>Aditya Raj Kar</span>
        </h1>

        <div className={styles.typewriter}>
          <Typewriter
            options={{
              strings: [
                'B.Tech CSE (IoT) Student @VIT',
                'Aspiring Cybersecurity Expert',
                'IoT & Web Developer',
                'Problem Solver',
              ],
              autoStart: true,
              loop: true,
              delay: 60,
              deleteSpeed: 30,
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
