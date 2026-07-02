import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Skills.module.css';

const categories = [
  {
    title: 'Full-Stack Development',
    bullets: [
      'Building web apps with React, Next.js, FastAPI',
      'Database design with PostgreSQL, Prisma',
      'Secure auth with bcrypt, SMTP pipelines',
    ],
    tags: ['React', 'Next.js', 'FastAPI', 'TypeScript', 'JavaScript', 'PostgreSQL', 'Prisma'],
  },
  {
    title: 'IoT & Automation',
    bullets: [
      'ESP32/ESP8266 sensor integration',
      'Real-time cloud dashboards',
      'Smart automation',
    ],
    tags: ['ESP32', 'Arduino', 'Firebase', 'Wokwi', 'ThingSpeak'],
  },
  {
    title: 'AI & Data',
    bullets: [
      'Multi-agent workflows with LangGraph',
      'RAG pipelines with ChromaDB',
      'Data collection and analysis',
    ],
    tags: ['LangGraph', 'Gemini API', 'ChromaDB', 'Python'],
  },
  {
    title: 'DevOps & Monitoring',
    bullets: [
      'Containerized deployments',
      'Observability stacks',
    ],
    tags: ['Docker', 'Prometheus', 'Grafana', 'Git'],
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: 'easeOut' },
};

const Skills = () => {
  return (
    <section className={styles.section} id="skills">
      <motion.div {...fadeIn}>
        <p className={styles.sectionLabel}>{'// SECTION_01'}</p>
        <h2 className={styles.sectionTitle}>WHAT I DO.</h2>
        <p className={styles.subtitle}>
          Full-stack developer building scalable web apps, real-time IoT systems,
          and AI-driven workflows.
        </p>
        <div className={styles.divider} />
      </motion.div>

      <div className={styles.grid}>
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            className={styles.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
          >
            <h3 className={styles.categoryTitle}>
              <span className={styles.categoryPrefix}>&gt; </span>
              {cat.title}
            </h3>

            <div className={styles.bulletList}>
              {cat.bullets.map((b) => (
                <p key={b} className={styles.bullet}>
                  <span className={styles.bulletPrefix}>-</span>
                  {b}
                </p>
              ))}
            </div>

            <div className={styles.tags}>
              {cat.tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
