// src/components/Projects.jsx
import React from 'react';
import styles from '../styles/Projects.module.css';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "Bus Credit System",
    description:
      "A smart ID-linked wallet system to replace cash-based shuttle fares. It reduces waiting time by debiting instantly when students board and synchronizes with shuttle vendors automatically.",
    tech: ["HTML", "CSS", "JavaScript", "MySQL"],
    github: "https://github.com/TRITUSLegend/Bus-Credit-System-BCS-",
  },
  {
    title: "IoT Sensor Monitoring",
    description:
      "A real-time ESP32 and DHT22 system that tracks temperature & humidity using a cloud dashboard with alert thresholds and historical graphing — all simulated via Wokwi.",
    tech: ["ESP32", "DHT22", "ThingSpeak", "Wokwi"],
    github: "https://github.com/TRITUSLegend/Temp.-and-Humidity-Real-time-Monitoring",
  },
  {
    title: "Smart Room Dashboard",
    description:
      "A real-time IoT dashboard that monitors room environmental data—temperature, humidity, lighting, and device status—via ESP32 sensors, with interactive controls and cloud visualization.",
    tech: ["ESP32", "Firebase", "Wowki", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/TRITUSLegend/smart-room-dashboard",
    live: "https://trituslegend.github.io/smart-room-dashboard/"
  }
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          <span className={styles.subtle}>featured</span> Projects
        </h2>
        <div className={styles.bgLight1} />
        <div className={styles.bgLight2} />

        {projects.map((proj, i) => (
          <motion.div
            key={i}
            className={`${styles.projectBlock} ${i % 2 !== 0 ? styles.reverse : ""}`}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: i * 0.2 }}
          >
            <div className={styles.content}>
              <motion.h3
                className={styles.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                {proj.title}
              </motion.h3>

              <motion.p
                className={styles.desc}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {proj.description}
              </motion.p>

              <motion.ul
                className={styles.techList}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {proj.tech.map((t, idx) => (
                  <motion.li
                    key={idx}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {t}
                  </motion.li>
                ))}
              </motion.ul>

              <div className={styles.links}>
                <motion.a
                  href={proj.github}
                  className={styles.ghostBtn}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaGithub /> Github
                </motion.a>

                {proj.live && (
                  <motion.a
                    href={proj.live}
                    className={styles.ghostBtn}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    🌐 Live Demo
                  </motion.a>
                )}
              </div>
            </div>

            <div className={styles.accentLayer} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
