import React, { PropTypes } from 'react';

import styles from './HardSkills.css';
import VisibilitySensor from 'react-visibility-sensor';

let whenVisible = (isVisible) => {
  console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
}

function HardSkills(props, context) {
  return (

    <div className={styles.hardSkills}>
      <div className={styles.hardLanguages}>
        <VisibilitySensor>
          {({isVisible}) =>
            <div>I am {isVisible ? 'visible' : 'invisible'}</div>
          }
          
          <div className="bar" data-percent="75"></div>

        </VisibilitySensor>
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
