import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Style
import styles from './Profile.css';

class Profile extends Component {
  render() {
    return (
      <div>Profile</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
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
