// src/components/Skills.jsx
import React from 'react';
import styles from '../styles/Skills.module.css';
import { motion } from 'framer-motion';
import {
  SiReact, SiFirebase, SiNodedotjs, SiMysql,
  SiCss3, SiHtml5, SiJavascript, SiCplusplus,
  SiPython, SiArduino, SiGit, SiVscodium, // for "VS Code" icon (same logo)
  SiC

} from 'react-icons/si';

const skills = [
  { icon: <SiC />, label: 'C' },
  { icon: <SiCplusplus />, label: 'C++' },
  { icon: <SiHtml5 />, label: 'HTML5' },
  { icon: <SiCss3 />, label: 'CSS3' },
  { icon: <SiJavascript />, label: 'JavaScript' },
  { icon: <SiReact />, label: 'React.js' },
  { icon: <SiNodedotjs />, label: 'Node.js' },
  { icon: <SiFirebase />, label: 'Firebase' },
  { icon: <SiGit />, label: 'Git' },
  { icon: <SiVscodium />, label: 'VS Code' },
  { icon: <SiArduino />, label: 'Arduino' },
  { icon: <SiPython />, label: 'Python' }
  
];

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.bgGlow} />

      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className={styles.heading}>-Skills-</h2>
        <div className={styles.grid}>
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className={styles.card}
              whileHover={{ scale: 1.12 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className={styles.icon}>{skill.icon}</span>
              <p>{skill.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
