import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';

import styles from './SoftSkills.css';

function SoftSkills(props, context) {
  return (
    <div className={styles.softSkills}>
      <div className={styles.title}>{'{'} <FormattedMessage id="menuSkills" /> {'}'}</div>
      {/* Copy Paste for SoftSkill */}
      <div className={styles.softSkill}>
        <div className={styles.octagon}>
          <div className={styles.octagonContent}>
            <i className="fas fa-code-branch"></i>
          </div>
        </div>
        <div className={styles.softTtl}><FormattedMessage id="SS1" /></div>
        <ul className={styles.ulSoft}>
          <li><FormattedMessage id="ss11" /></li>
          <li><FormattedMessage id="ss12" /></li>
        </ul>
      </div>
      {/* Copy Paste for SoftSkill */}
      <div className={styles.softSkill}>
        <div className={styles.octagon}>
          <div className={styles.octagonContent}>
            <i className="fas fa-thermometer-full"></i>
          </div>
        </div>
        <div className={styles.softTtl}><FormattedMessage id="SS2" /></div>
        <ul className={styles.ulSoft}>
          <li><FormattedMessage id="ss21" /></li>
        </ul>
      </div>
      {/* Copy Paste for SoftSkill */}
      <div className={styles.softSkill}>
        <div className={styles.octagon}>
          <div className={styles.octagonContent}>
            <i className="fas fa-lightbulb"></i>
          </div>
        </div>
        <div className={styles.softTtl}><FormattedMessage id="SS3" /></div>
        <ul className={styles.ulSoft}>
          <li><FormattedMessage id="ss31" /></li>
          <li><FormattedMessage id="ss32" /></li>
          <li><FormattedMessage id="ss33" /></li>
        </ul>
      </div>
      {/* Copy Paste for SoftSkill */}
      <div className={styles.softSkill}>
        <div className={styles.octagon}>
          <div className={styles.octagonContent}>
            <i className="fas fa-graduation-cap"></i>
          </div>
        </div>
        <div className={styles.softTtl}><FormattedMessage id="SS4" /></div>
        <ul className={styles.ulSoft}>
          <li><FormattedMessage id="ss41" /></li>
          <li><FormattedMessage id="ss42" /></li>
          <li><FormattedMessage id="ss43" /></li>
        </ul>
      </div>
      {/* Copy Paste for SoftSkill */}
      <div className={styles.softSkill}>
        <div className={styles.octagon}>
          <div className={styles.octagonContent}>
            <i className="fas fa-users"></i>
          </div>
        </div>
        <div className={styles.softTtl}><FormattedMessage id="SS5" /></div>
        <ul className={styles.ulSoft}>
          <li><FormattedMessage id="ss51" /></li>
          <li><FormattedMessage id="ss52" /></li>
          <li><FormattedMessage id="ss53" /></li>
        </ul>
      </div>
      {/* Copy Paste for SoftSkill */}
      <div className={styles.softSkill}>
        <div className={styles.octagon}>
          <div className={styles.octagonContent}>
            <i className="fas fa-chart-line"></i>
          </div>
        </div>
        <div className={styles.softTtl}><FormattedMessage id="SS6" /></div>
        <ul className={styles.ulSoft}>
          <li><FormattedMessage id="ss61" /></li>
          <li><FormattedMessage id="ss62" /></li>
        </ul>
      </div>
    </div>
  );
}

SoftSkills.propTypes = {
};

export default SoftSkills;
