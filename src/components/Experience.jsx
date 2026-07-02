import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Experience.module.css';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: 'easeOut' },
};

const bullets = [
  'Worked with ESP32/ESP8266/Arduino for IoT prototyping, sensor integration, and automation',
  'Developed cloud dashboards for real-time data logging, visualization, and alerts',
  'Documented processes for project clarity and knowledge sharing',
];

const Experience = () => {
  return (
    <section className={styles.section} id="experience">
      <motion.div {...fadeIn}>
        <p className={styles.sectionLabel}>{'// SECTION_03'}</p>
        <h2 className={styles.sectionTitle}>EXPERIENCE.</h2>
      </motion.div>

      <motion.div
        className={styles.card}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
      >
        <div className={styles.cardTop}>
          <div className={styles.dots}>
            <span className={`${styles.dot} ${styles.dotRed}`} />
            <span className={`${styles.dot} ${styles.dotYellow}`} />
            <span className={`${styles.dot} ${styles.dotGreen}`} />
          </div>
          <span className={styles.cardName}>EXPERIENCE</span>
        </div>

        <div className={styles.cardBody}>
          <p className={styles.codeLine}>
            <span className={styles.keyword}>const </span>
            <span className={styles.variable}>role </span>
            <span className={styles.keyword}>= </span>
            <span className={styles.string}>&apos;SOFTWARE INTERN&apos;</span>
            <span className={styles.punctuation}>;</span>
          </p>
          <p className={styles.codeLine}>
            <span className={styles.keyword}>const </span>
            <span className={styles.variable}>company </span>
            <span className={styles.keyword}>= </span>
            <span className={styles.string}>&apos;Perennial Systems Pvt. Ltd.&apos;</span>
            <span className={styles.punctuation}>;</span>
          </p>
          <p className={styles.codeLine}>
            <span className={styles.keyword}>const </span>
            <span className={styles.variable}>period </span>
            <span className={styles.keyword}>= </span>
            <span className={styles.cyan}>&apos;June 2025 – July 2025&apos;</span>
            <span className={styles.punctuation}>;</span>
          </p>

          <br />

          {bullets.map((b) => (
            <p key={b} className={styles.bulletItem}>
              <span className={styles.bulletPrefix}>-</span>
              {b}
            </p>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
