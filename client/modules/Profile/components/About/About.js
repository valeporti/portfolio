import React, { PropTypes } from 'react';

// Import Style
import styles from './About.css';

function About(props, context) {
  return (
    <div className={styles.about}>
      <div className={styles.title}>{'{'} Resume {'}'}</div>
      <div className={styles.aboutCont}>
        <div className={styles.icon}>
          <i className="fas fa-terminal"></i>
        </div>
        <div className={styles.presentation}>
          <p className={styles.name}>Valentin Portillo Galvan</p>
          <p className={styles.intitle}>Software Developer</p>
          <div className={styles.smallDescription}>
            <p>I'm a Universidad Nacional Autónoma de México (UNAM) Graduate, right now looking for a master.</p>
            <p>
              I've worked in Project Management, Business Analysis and Software Developement. 
              Being Software Development my favorite and mainly working in back-end Developement.
            </p>
            <p>
              Always interested in Computer Science deepening knowledge and challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

About.propTypes = {
};

export default About;
