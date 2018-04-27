import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Profile.css';

// Import Images
import first_image from '../../images/code.jpg';

class Profile extends Component {
  //{/* <img src={first_image}  /> */}
  render() {
    return (
      <div>
        <div className={styles.fastAbout}>
          
          <FormattedMessage id="profileTitle" />
          <FormattedMessage id="aboutMe" />
        </div>        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    //lol: state.lol
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

Profile.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
