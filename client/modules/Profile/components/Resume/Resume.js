import React, { PropTypes } from 'react';

// Import Style
import styles from './Resume.css';

function Resume(props, context) {
  return (
    <div className={styles.Resume}>
      <div className={styles.header}>
        {'{'} Resume {'}'}
      </div>
      <div className={styles.item}>
        <div className={styles.timeline}>
          <section className={styles.year}>
            <h3>2007</h3>
            <section>
              <ul>
                <li>Satoshi Nakamoto began working on the Bitcoin concept.</li>
              </ul>
            </section>     
          </section>
          <section className={styles.year}>
            <h3>2008</h3>
            <section>
              <h4>August</h4>
              <ul>
                <li>Neal Kin, Vladimir Oksman, and Charles Bry file an application for an encryption patent application.</li>
                <li>Bitcoin.org was registered at <a href="https://anonymousspeech.com/">anonymousspeech.com</a>.</li>
              </ul>
            </section>
            <section>
              <h4>October</h4>
              <ul>
                <li>Nakamoto describes the Bitcoin currency and solves the problem of double spending.</li>
              </ul>
            </section>
            <section>
              <h4>November</h4>
              <ul>
                <li>The Bitcoin project is registered on <a href="https://sourceforge.net/">SourceForge.net</a>.</li>
              </ul>
            </section>
          </section>
        </div>
      </div>
    </div>
  );
}

Resume.propTypes = {
};

export default Resume;
