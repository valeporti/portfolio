import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
//import styles from './Profile.css';

class Profile extends Component {
  render() {
    return (
      <div>
        <div>Profile</div>
        <FormattedMessage id="aboutMe" />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    lol: state.lol
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
