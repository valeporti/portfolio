import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap'

// Import Style
import styles from './Header.css';
//image
import logo2 from '../../../../images/logo2.jpg';

export function Header(props, context) {
  /* const languageNodes = props.intl.enabledLanguages.map(
    lang => <li key={lang} onClick={() => props.switchLanguage(lang)} className={lang === props.intl.locale ? styles.selected : ''}>{lang}</li>
  ); */

  const pathname = typeof window !== "undefined" && window.location && window.location.pathname;
  const isProjects = pathname && pathname === '/projects';

  const languageNodes = props.intl.enabledLanguages.map(
    lang => <NavDropdown.Item key={lang} onClick={() => props.switchLanguage(lang)} className={lang === props.intl.locale ? styles.selected : ''}>{lang}</NavDropdown.Item>
  );

  return (
    <Navbar
      className={styles.header}
      sticky="top"
      variant="dark"
      expand="md"
      style={{ padding: "0 1rem" }}
    >
      <Navbar.Brand href="/#About" className={styles.logoContainer}>
        <img src={logo2} className={styles.logo} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/#About">
            <FormattedMessage id="menuAbout" />
          </Nav.Link>
          <Nav.Link href="/#Skills">
            <FormattedMessage id="menuSkills" />
          </Nav.Link>
          <Nav.Link href="/#Resume">
            <FormattedMessage id="menuResume" />
          </Nav.Link>
          <Nav.Link href="/#Contact">
            <FormattedMessage id="menuContact" />
          </Nav.Link>
          <Nav.Link
            href="/projects"
            style={{ padding: "0", border: "1px solid", display: "flex" }}
            active={isProjects}
          >
            <span style={{ alignSelf: "center", padding: "0 1em" }}>
              <FormattedMessage id="menuProjects" />
            </span>
          </Nav.Link>
          { isProjects && <Nav.Item>&nbsp;&nbsp;<i className="fas fa-arrow-right" style={{color: 'white'}} />&nbsp;&nbsp;<Button variant='outline-light' onClick={() => { window.print(); return false; }}><i className='fas fa-print'/></Button></Nav.Item>}
        </Nav>
        <Nav>
          <NavDropdown
            title={<FormattedMessage id="switchLanguage" />}
            id="collasible-nav-dropdown"
          >
            {languageNodes}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}


//<div className={styles.header}>
      
//      <div className={styles['language-switcher']}>
//        <div className={styles.logoContainer}>
 //         <img src={logo2} className={styles.logo} />
  //      </div>
  //      <ul>
  //        <li><FormattedMessage id="switchLanguage" /></li>
  //        {languageNodes}
  //      </ul>
  //      {/* <img alt='logo' src={logo1} /> */}
  //    </div>
  //    {/*
  //    <div className={styles.content}>
  //      <h1 className={styles['site-title']}>
  //        <Link to="/" ><FormattedMessage id="siteTitle" /></Link>
  //      </h1>
  //      {
  //        context.router.isActive('/', true)
  //          ? <a className={styles['add-post-button']} href="#" onClick={props.toggleAddPost}><FormattedMessage id="addPost" /></a>
  //          : null
  //      }
  //    </div>
  //    */}
  //  </div>

Header.contextTypes = {
  
};

Header.propTypes = {
  toggleAddPost: PropTypes.func.isRequired,
  switchLanguage: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

export default Header;
