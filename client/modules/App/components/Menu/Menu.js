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
          <li><a href="#About">About</a></li>
          <li><a href="#Skills">Skills</a></li>
          <li><a href="#Resume">Resume</a></li>
          <li><a href="#Contact">Contact</a></li>
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
