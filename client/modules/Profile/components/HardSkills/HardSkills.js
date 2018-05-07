import React, { PropTypes } from 'react';

import styles from './HardSkills.css';

function HardSkills(props, context) {
  let isVisible = props.isVisible;
  return (
    <div className={styles.hardSkills}>
      <div className={styles.hardLanguages}>
        <div className={styles.graphcont}>
          <div className={styles.bar}>70%</div>
        </div>
      </div>
      <div className={styles.hardProgramming}>
        
      </div>
      <div className={styles.hardStacks}>
      
      </div>
    </div>
  );
}

HardSkills.propTypes = {
};

export default HardSkills;
