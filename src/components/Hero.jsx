import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import styles from '../styles/Hero.module.css';

const RESUME_URL =
  'https://drive.google.com/file/d/1YUIBfrxyqb25o_wB2kEv1oNh8zHY3N5K/view?usp=sharing';

const stats = [
  { number: '4', label: 'Projects Built' },
  { number: '2', label: 'Certifications' },
  { number: '8.44', label: 'CGPA' },
];

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
          Data analyst turning raw commerce and sensor data into decisions with
          SQL, Python, Power BI and machine learning. B.Tech CSE (IoT) at VIT Vellore.
        </p>

        <div className={styles.buttons}>
          <a
            href={RESUME_URL}
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
        {stats.map((s) => (
          <div key={s.label} className={styles.stat}>
            <div className={styles.statNumber}>{s.number}</div>
            <div className={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
