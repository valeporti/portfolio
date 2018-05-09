import React, { PropTypes } from 'react';

// Import Style
import styles from './SkillBar.css';

function SkillBar(props, context) {
  return (
    <div className={styles.progLan}>
      <div className={styles.progLanName}>
        {props.name}
      </div>
      <div className={styles.progLanBar}>
        <div className={styles.bar} style={{width: props.percentage + '%'}}>{props.percentage}%</div>
      </div>
    </div>
  );
}

SkillBar.propTypes = {
};

export default SkillBar;
