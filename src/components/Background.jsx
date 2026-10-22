import React from 'react';
import { motion } from 'framer-motion';
import shared from '../styles/Shared.module.css';
import styles from '../styles/Background.module.css';

// Each field is [key, value, tone]; tone defaults to 'string'
const cards = [
  {
    file: 'education.js',
    blocks: [
      {
        variable: 'vit',
        fields: [
          ['school', 'VIT, Vellore'],
          ['degree', 'B.Tech CSE (Internet of Things)'],
          ['period', '2023 – 2027', 'cyan'],
          ['cgpa', '8.44 / 10', 'cyan'],
        ],
      },
      {
        variable: 'amity',
        fields: [
          ['school', 'Amity International School, New Delhi'],
          ['grade', 'XII (CBSE)'],
          ['year', '2023', 'cyan'],
          ['score', '88.6%', 'cyan'],
        ],
      },
    ],
  },
  {
    file: 'certifications.js',
    blocks: [
      {
        variable: 'certifications',
        fields: [
          ['oracle', 'OCI Foundations Associate'],
          ['ibmSkillsNetwork', 'SQL and Relational Databases 101'],
        ],
      },
    ],
  },
  {
    file: 'leadership.js',
    tall: true,
    blocks: [
      {
        variable: 'sae',
        fields: [
          ['role', 'Senior Core, Society of Automotive Engineering Chapter, VIT'],
          ['event', 'Riviera ’24', 'cyan'],
          ['attendees', '300+', 'cyan'],
        ],
        bullets: [
          'Planned and executed events end-to-end, coordinating cross-functional teams and outreach and promotional campaigns.',
          'Spearheaded the chapter’s first Formula 1 Screening, establishing a new recurring student engagement initiative.',
        ],
      },
      {
        variable: 'hackBattle',
        fields: [
          ['role', 'Team Leader'],
          ['event', 'HackBattle 36-hour hackathon, VIT (2nd year)'],
          ['result', 'Penultimate round', 'cyan'],
        ],
        bullets: [
          'Led the team, managing task allocation and development under time pressure.',
        ],
      },
    ],
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: 'easeOut' },
};

const Background = () => {
  return (
    <section className={shared.section} id="background">
      <motion.div {...fadeIn}>
        <p className={shared.sectionLabel}>{'// SECTION_04'}</p>
        <h2 className={shared.sectionTitle}>BACKGROUND.</h2>
      </motion.div>

      <div className={styles.grid}>
        {cards.map((card, i) => (
          <motion.div
            key={card.file}
            className={`${shared.card} ${card.tall ? styles.tall : ''}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
          >
            <div className={shared.cardTop}>
              <div className={shared.dots}>
                <span className={`${shared.dot} ${shared.dotRed}`} />
                <span className={`${shared.dot} ${shared.dotYellow}`} />
                <span className={`${shared.dot} ${shared.dotGreen}`} />
              </div>
              <span className={shared.cardName}>{card.file}</span>
            </div>

            <div className={shared.cardBody}>
              {card.blocks.map((block) => (
                <div key={block.variable} className={styles.block}>
                  <p className={shared.codeLine}>
                    <span className={shared.keyword}>const </span>
                    <span className={shared.variable}>{block.variable} </span>
                    <span className={shared.keyword}>= </span>
                    <span className={shared.punctuation}>{'{'}</span>
                  </p>
                  {block.fields.map(([key, value, tone = 'string']) => (
                    <p key={key} className={shared.codeLine}>
                      {'  '}<span className={shared.key}>{key}: </span>
                      <span className={shared[tone]}>&apos;{value}&apos;</span>
                      <span className={shared.punctuation}>,</span>
                    </p>
                  ))}
                  <p className={shared.codeLine}>
                    <span className={shared.punctuation}>{'};'}</span>
                  </p>

                  {block.bullets && (
                    <div className={styles.bullets}>
                      {block.bullets.map((b) => (
                        <p key={b} className={shared.bulletItem}>
                          <span className={shared.bulletPrefix}>-</span>
                          {b}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Background;
