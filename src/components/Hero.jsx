import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import styles from '../styles/Hero.module.css';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const StackText = ({ text }) => {
  return (
    <span className={styles.stackWrapper}>
      <span className={styles.stackText}>
        {text}
      </span>
    </span>
  );
};

const Hero = () => {
  return (
    <section className={styles.hero} id="hero">
      <motion.div
        className={styles.content}
        initial={fadeIn.initial}
        animate={fadeIn.animate}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <p className={styles.greeting}>HI ALL,</p>
        <h1 className={styles.name}>
          I&apos;M <StackText text="ADITYA" />
        </h1>

        <p className={styles.description}>
          Full-stack developer building scalable web apps, real-time IoT systems,
          and AI-driven workflows. Currently pursuing B.Tech at VIT Vellore.
        </p>

        <div className={styles.buttons}>
          <a
            href="https://drive.google.com/file/d/1bslTWY5R3P18zg3dimJBNumfmaKM7V5I/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.termBtn} ${styles.termBtnPrimary}`}
          >
            [ SEE MY RESUME ]
          </a>
          <Link
            to="projects"
            smooth={true}
            duration={600}
            offset={-60}
            className={styles.termBtn}
          >
            [ VIEW PROJECTS ]
          </Link>
        </div>
      </motion.div>

      <motion.div
        className={styles.stats}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
      >
        <div className={styles.stat}>
          <div className={styles.statNumber}>3+</div>
          <div className={styles.statLabel}>Projects Built</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statNumber}>1</div>
          <div className={styles.statLabel}>Internship</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statNumber}>8.44</div>
          <div className={styles.statLabel}>CGPA</div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
