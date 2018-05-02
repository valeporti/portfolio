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
      <p><a href="https://www.linkedin.com/in/valeporti/" target="_Blank"><i className="fa fa-linkedin"></i></a></p>
    </div>
  );
}

export default Footer;
