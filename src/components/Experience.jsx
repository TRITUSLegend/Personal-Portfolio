// src/components/Experience.jsx
import React from 'react';
import styles from '../styles/Experience.module.css';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <h2 className={styles.heading}>-Experience-</h2>

        <div className={styles.timeline}>
          <motion.div
            className={styles.entry}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className={styles.marker} />
            <div className={styles.content}>
              <h3>IoT Intern</h3>
              <span className={styles.company}>Perennial Systems Ltd.</span>
              <span className={styles.date}>June 2025 – July 2025</span>
              <ul className={styles.desc}>
                <li>Working with ESP8266, ESP32 and Arduino boards</li>
                <li>Sensor integration & meaningful data collection</li>
                <li>Built dashboards for real-time cloud data logging</li>
                <li>Prototyped simple automation solutions</li>
                <li>Documented workflows and learning outcomes</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
