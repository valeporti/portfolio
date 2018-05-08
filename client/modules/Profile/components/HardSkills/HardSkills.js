import React, { PropTypes } from 'react';

import styles from './HardSkills.css';

function HardSkills(props, context) {
  let isVisible = props.isVisible;
  let width = 0
  if (isVisible) {
    width = 70
  }
  return (
    <div className={styles.hardSkills}>
      <div className={styles.hardLanguages}>
        <div className={styles.progLan}>
          <div className={styles.progLanName}>
            HTML
          </div>
          <div className={styles.progLanBar}>
            <div className={styles.bar} style={{width: width + '%'}}>70%</div>
          </div>
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
