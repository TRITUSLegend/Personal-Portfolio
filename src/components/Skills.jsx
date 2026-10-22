import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Skills.module.css';

const categories = [
  {
    title: 'Analytics & BI',
    bullets: [
      'Cleaning and joining multi-table data in SQL with DuckDB',
      'Power BI star-schema models with DAX measures reconciled to SQL results',
      'Revenue concentration, repeat-purchase and RFM-style customer analysis',
      'Real-time sensor dashboards with threshold-based alerts on anomalous readings',
    ],
    tags: ['SQL', 'Power BI', 'DAX', 'DuckDB', 'PostgreSQL', 'MongoDB', 'Excel'],
  },
  {
    title: 'Data Science & ML',
    bullets: [
      'Data wrangling and exploratory analysis in Python with pandas',
      'LightGBM models on checkout-time features, evaluated on a later-period test',
      'Model explainability with SHAP',
      'What-if scenarios to size the impact of an operational fix',
    ],
    tags: ['Python', 'pandas', 'LightGBM', 'SHAP', 'Model Evaluation', 'Streamlit', 'Plotly'],
  },
  {
    title: 'AI & LLM Workflows',
    bullets: [
      'Multi-agent LangGraph pipelines for market sentiment research',
      'LLM integration with RAG and prompt engineering',
      'Prompt-injection sanitization and deterministic quality checks on LLM output',
    ],
    tags: ['LangGraph', 'RAG', 'LLM Integration', 'Prompt Engineering'],
  },
  {
    title: 'Engineering Foundations',
    bullets: [
      'Data structures & algorithms, OOP, DBMS and computer networks',
      'REST APIs with FastAPI and JWT authentication',
      'Deploying to Netlify, Vercel, Render and Streamlit Cloud',
    ],
    tags: ['C/C++', 'TypeScript', 'React', 'FastAPI', 'REST APIs', 'Git', 'GitHub'],
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
          Data analyst working in SQL, Python and Power BI: cleaning and joining raw
          data, finding what drives revenue and retention, and turning each business
          question into a metric and a recommended action.
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
