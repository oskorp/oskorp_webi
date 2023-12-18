// components/FloatingNavbar.js
import React from 'react';
import styles from './floatingbar.module.css';

const Floatinbar = () => {
  return (
    <nav className={styles.floatingNavbar}>
      <a href="#me">Me</a>
      <a href="#project">Project</a>
      <a href="#experience">Experience</a>
      <a href="#skills">Skills</a>
    </nav>
  );
};

export default Floatinbar;
