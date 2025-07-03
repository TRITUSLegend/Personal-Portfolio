// src/components/Loader.jsx
import React from 'react';
import styles from '../styles/Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.loader}>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>T</span>
        <span>Y</span>
        <span>A</span>
      </div>
    </div>
  );
};

export default Loader;
