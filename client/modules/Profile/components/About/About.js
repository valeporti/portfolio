import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './About.css';

function About(props, context) {
  return (
    <div className={styles.about}>
      <div className={styles.title}>{'{'} <FormattedMessage id="menuAbout" /> {'}'}</div>
      <div className={styles.aboutCont}>
        <div className={styles.icon}>
          <i className="fas fa-terminal"></i>
        </div>
        <div className={styles.presentation}>
          <p className={styles.name}>Valentin Portillo</p>
          <p className={styles.intitle}>Data Scientist / Software Engineer</p>
          <div className={styles.smallDescription}>
            <p><FormattedMessage id="Me1" /></p>
            <p>
              <FormattedMessage id="Me2" />
            </p>
            <p>
              <FormattedMessage id="Me3" />
            </p>
            <p>
              <FormattedMessage id="Me4" />
            </p>
            <p>
              <FormattedMessage id="MeConc" />
            </p>
          </div>
          <p className={styles.intitle}><FormattedMessage id="KeyW" /></p>
          <div className={styles.smallDescription}>
            <p>
              <FormattedMessage id='KeyWords' /> 
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
