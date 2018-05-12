import React, { PropTypes } from 'react';

import styles from './SoftSkills.css';

function SoftSkills(props, context) {
  return (
    <div className={styles.softSkills}>
      <div className={styles.title}>{'{'} Skills {'}'}</div>
      {/* Copy Paste for SoftSkill */}
      <div className={styles.softSkill}>
        <div className={styles.octagon}>
          <div className={styles.octagonContent}>
            <i className="fas fa-code-branch"></i>
          </div>
        </div>
        <div className={styles.softTtl}>Analytic</div>
        <ul className={styles.ulSoft}>
          <li>Understand the requirements</li>
          <li>Develop according to needs</li>
        </ul>
      </div>
      {/* Copy Paste for SoftSkill */}
      <div className={styles.softSkill}>
        <div className={styles.octagon}>
          <div className={styles.octagonContent}>
            <i className="fas fa-thermometer-full"></i>
          </div>
        </div>
        <div className={styles.softTtl}>Commitment</div>
        <ul className={styles.ulSoft}>
          <li>Deliver Ended Products</li>
        </ul>
      </div>
      {/* Copy Paste for SoftSkill */}
      <div className={styles.softSkill}>
        <div className={styles.octagon}>
          <div className={styles.octagonContent}>
            <i className="fas fa-lightbulb"></i>
          </div>
        </div>
        <div className={styles.softTtl}>Problem Solver</div>
        <ul className={styles.ulSoft}>
          <li>Find the root</li>
          <li>Develop a logical step-by-step</li>
          <li>Deliver a system</li>
        </ul>
      </div>
      {/* Copy Paste for SoftSkill */}
      <div className={styles.softSkill}>
        <div className={styles.octagon}>
          <div className={styles.octagonContent}>
            <i className="fas fa-graduation-cap"></i>
          </div>
        </div>
        <div className={styles.softTtl}>Learner</div>
        <ul className={styles.ulSoft}>
          <li>Self-taught</li>
          <li>Enthousiastic</li>
          <li>Versatile</li>
        </ul>
      </div>
      {/* Copy Paste for SoftSkill */}
      <div className={styles.softSkill}>
        <div className={styles.octagon}>
          <div className={styles.octagonContent}>
            <i className="fas fa-users"></i>
          </div>
        </div>
        <div className={styles.softTtl}>Team-Work</div>
        <ul className={styles.ulSoft}>
          <li>Know How</li>
          <li>Social</li>
          <li>Ask & Answer</li>
        </ul>
      </div>
      {/* Copy Paste for SoftSkill */}
      <div className={styles.softSkill}>
        <div className={styles.octagon}>
          <div className={styles.octagonContent}>
            <i className="fas fa-chart-line"></i>
          </div>
        </div>
        <div className={styles.softTtl}>Add Value</div>
        <ul className={styles.ulSoft}>
          <li>Proposals</li>
          <li>Business / ethical directed reasoning</li>
        </ul>
      </div>
    </div>
  );
}

SoftSkills.propTypes = {
};

export default SoftSkills;
