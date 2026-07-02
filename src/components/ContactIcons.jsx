import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/ContactIcons.module.css';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: 'easeOut' },
};

const socials = [
  { label: 'GitHub', url: 'https://github.com/TRITUSLegend' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/adityarajkar' },
  { label: 'Email', url: 'mailto:adityarajkar1105@gmail.com' },
];

const ContactIcons = () => {
  return (
    <section className={styles.section} id="contact">
      <motion.div {...fadeIn}>
        <p className={styles.sectionLabel}>{'// SECTION_04'}</p>
        <h2 className={styles.sectionTitle}>GET IN TOUCH.</h2>
        <p className={styles.subtitle}>
          Got a question, proposal, or project? Feel free to reach out.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
      >
        <a href="mailto:adityarajkar1105@gmail.com" className={styles.email}>
          adityarajkar1105@gmail.com
        </a>
      </motion.div>

      <motion.div
        className={styles.socials}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
      >
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.url}
            target={s.url.startsWith('mailto') ? undefined : '_blank'}
            rel={s.url.startsWith('mailto') ? undefined : 'noopener noreferrer'}
            className={styles.socialLink}
          >
            {s.label}
          </a>
        ))}
      </motion.div>
    </section>
  );
};

export default ContactIcons;
