import React from 'react';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Footer.css';

// Import Images
import bg from '../../header-bk.png';

export function Footer() {
  //<div style={{ background: `#FFF url(${bg}) center` }} className={styles.footer}>
  return (
    <div className={styles.footer}>
      <p>&copy; 2018 &middot; V &middot; Valentin Portillo</p>
      <p className={styles.links}>
        <a className={styles.link} href="https://www.linkedin.com/in/valeporti/" target="_Blank"><i className="fab fa-linkedin-in"></i></a>
        <a className={styles.link} href="https://codepen.io/valeporti/" target="_Blank"><i className="fab fa-codepen"></i></a>
        <a className={styles.link} href="https://github.com/valeporti/" target="_Blank"><i className="fab fa-github"></i></a>
      </p>
    </div>
  );
}

export default Footer;
