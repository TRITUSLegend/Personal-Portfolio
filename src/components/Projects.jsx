import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import styles from '../styles/Projects.module.css';

const projects = [
  {
    name: 'CommerceLens',
    variable: 'commerceLens',
    tools: ['Python', 'SQL', 'DuckDB', 'pandas', 'LightGBM', 'SHAP', 'Power BI', 'DAX', 'Streamlit'],
    description:
      'E-commerce revenue and retention analytics. Cleaned and joined the raw order data in DuckDB SQL, resolving duplicate reviews and customer IDs, then built a Power BI report on a star-schema model with DAX measures reconciled to the SQL results, mapping each business question to a metric and a recommended action.',
    findings: [
      '99,441 orders across 9 tables',
      '18 of 74 categories drive 80% of revenue',
      '97% of customers buy only once',
      'Late orders get 1–2 star reviews 62% of the time vs 9% on-time',
      'What-if: rescuing half of late orders could prevent up to ~1,700 low reviews',
      'At-risk order model (LightGBM + SHAP) on checkout-time features: ROC-AUC 0.61 on a later-period test',
    ],
    github: 'https://github.com/TRITUSLegend/CommerceLens',
  },
  {
    name: 'OpinionMap',
    variable: 'opinionMap',
    tools: ['LangGraph', 'ChromaDB', 'React', 'TypeScript', 'FastAPI', 'Docker'],
    description:
      'Multi-agent market sentiment analysis platform. Scrapes multiple sources, runs NLP analysis and generates structured market research reports with PDF export. Supporting stack: React/TypeScript frontend with a FastAPI REST layer.',
    pipeline: [
      '6-node LangGraph pipeline over 7 scraped sources',
      'Reviewer node enforces 5 deterministic quality checks and routes failing reports back for revision',
      'Prompt-injection sanitization and exponential backoff on API failures',
      '26 REST endpoints with JWT authentication',
      '6 sequential dashboard queries refactored into a single scalar subquery',
    ],
    github: 'https://github.com/TRITUSLegend/OpinionMap',
    live: 'https://opinionmap.netlify.app',
  },
  {
    name: 'BUSIT',
    variable: 'busit',
    tools: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    description:
      'A digital wallet platform to digitize campus transit. Built an in-house browser-based camera scanner and dynamic QR generation. Secure PostgreSQL database with bcrypt, automated SMTP email pipeline for receipts.',
    github: 'https://github.com/TRITUSLegend/busit-web',
    live: 'https://busit-web.vercel.app',
  },
  {
    name: 'Smart Room Dashboard',
    variable: 'smartRoom',
    tools: ['ESP32', 'Firebase', 'HTML', 'JavaScript'],
    description:
      'A real-time IoT dashboard monitoring room environmental data via ESP32 sensors with interactive controls and cloud visualization.',
    github: 'https://github.com/TRITUSLegend/smart-room-dashboard',
    live: 'https://trituslegend.github.io/smart-room-dashboard/',
  },
];

// Optional array fields, rendered as extra code lines only on projects that have them
const listFields = ['findings', 'pipeline'];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: 'easeOut' },
};

const Projects = () => {
  return (
    <section className={styles.section} id="projects">
      <motion.div {...fadeIn}>
        <p className={styles.sectionLabel}>{'// SECTION_02'}</p>
        <h2 className={styles.sectionTitle}>PROJECTS.</h2>
      </motion.div>

      <div className={styles.grid}>
        {projects.map((proj, i) => (
          <motion.div
            key={proj.name}
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
          >
            <div className={styles.cardTop}>
              <div className={styles.dots}>
                <span className={`${styles.dot} ${styles.dotRed}`} />
                <span className={`${styles.dot} ${styles.dotYellow}`} />
                <span className={`${styles.dot} ${styles.dotGreen}`} />
              </div>
              <span className={styles.cardName}>{proj.name}</span>
            </div>

            <div className={styles.cardBody}>
              <p className={styles.codeLine}>
                <span className={styles.keyword}>const </span>
                <span className={styles.variable}>{proj.variable} </span>
                <span className={styles.keyword}>= </span>
                <span className={styles.punctuation}>{'{'}</span>
              </p>
              <p className={styles.codeLine}>
                {'  '}<span className={styles.key}>name: </span>
                <span className={styles.string}>&apos;{proj.name}&apos;</span>
                <span className={styles.punctuation}>,</span>
              </p>
              <p className={styles.codeLine}>
                {'  '}<span className={styles.key}>tools: </span>
                <span className={styles.punctuation}>[</span>
                <span className={styles.string}>
                  {proj.tools.map((t) => `'${t}'`).join(', ')}
                </span>
                <span className={styles.punctuation}>]</span>
                <span className={styles.punctuation}>,</span>
              </p>
              <p className={styles.codeLine}>
                {'  '}<span className={styles.key}>description: </span>
                <span className={styles.cyan}>&apos;{proj.description}&apos;</span>
                <span className={styles.punctuation}>,</span>
              </p>
              {listFields
                .filter((field) => proj[field])
                .map((field) => (
                  <React.Fragment key={field}>
                    <p className={styles.codeLine}>
                      {'  '}<span className={styles.key}>{field}: </span>
                      <span className={styles.punctuation}>[</span>
                    </p>
                    {proj[field].map((item) => (
                      <p key={item} className={styles.codeLine}>
                        {'    '}<span className={styles.string}>&apos;{item}&apos;</span>
                        <span className={styles.punctuation}>,</span>
                      </p>
                    ))}
                    <p className={styles.codeLine}>
                      {'  '}<span className={styles.punctuation}>],</span>
                    </p>
                  </React.Fragment>
                ))}
              <p className={styles.codeLine}>
                <span className={styles.punctuation}>{'};'}</span>
              </p>
            </div>

            {(proj.github || proj.live) && (
              <div className={styles.cardFooter}>
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkBtn}
                  >
                    <FaGithub /> GitHub
                  </a>
                )}
                {proj.live && (
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkBtn}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
