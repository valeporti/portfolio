import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Import Style
import styles from './App.css';

// Import Components
import Helmet from 'react-helmet';
import DevTools from './components/DevTools';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';

// Import Actions
import { toggleAddPost, toggleActiveMenu } from './AppActions';
import { switchLanguage } from '../../modules/Intl/IntlActions';

export class App extends Component {
  constructor(props) {
    super(props);
    //console.log('in app');
    //console.log(props);
    this.state = { isMounted: false };
  }

  componentDidMount() {
    this.setState({isMounted: true}); // eslint-disable-line
  }

  toggleAddPostSection = () => {
    this.props.toggleAddPost();
  };

  toggleActiveMenu = () => {
    this.props.toggleActiveMenu();
  };

  render() {
    return (
      <div>
        {this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && <DevTools />}
        <div>
          <Helmet
            title="Valentin Portillo"
            titleTemplate="%s - Portfolio App"
            meta={[
              { charset: 'utf-8' },
              {
                'http-equiv': 'X-UA-Compatible',
                content: 'IE=edge',
              },
              {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
              },
            ]}
          />
          <Header
            switchLanguage={lang => this.props.switchLanguage(lang)}
            intl={this.props.intl}
            toggleAddPost={this.toggleAddPostSection}
          />
          <Menu 
            toggleActiveMenu={this.toggleActiveMenu}
            activeMenu={this.props.app.activeMenu}
          />
          <div className={styles.container}>
            {this.props.children}
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  //dispatch: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    intl: store.intl,
    app: store.app,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleAddPost: () => {
      dispatch(toggleAddPost())
    },
    toggleActiveMenu: () => {
      dispatch(toggleActiveMenu())
    },
    switchLanguage: (lang) => {
      dispatch(switchLanguage(lang))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
