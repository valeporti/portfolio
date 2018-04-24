import React, { PropTypes } from 'react';

import styles from './Menu.css';

function Menu(props, context) {
  //console.log('onmenu');
  //console.log(props);
  const activeMenu = props.activeMenu;
  let activeMenuClass = styles.menu;
  //console.log(styles);
  (activeMenu) ? activeMenuClass = styles.menu : activeMenuClass = '';

  return (
    <div className={!activeMenu && styles.menu || styles.menuactive }>
      <span onClick={props.toggleActiveMenu}>
        <i></i>
        <i></i>
        <i></i>
      </span>
      <div className={styles.menuContent}>
        <ul>
          <li>About</li>
          <li>Resume</li>
          <li>Skills</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

Menu.propTypes = {
  toggleActiveMenu: PropTypes.func.isRequired,
  activeMenu: PropTypes.object.isRequired,
};

export default Menu;
