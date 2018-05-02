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
        <a name="About">
          <div className={styles.fastAbout}>
            <div className={styles.about}>
            {/*<FormattedMessage id="profileTitle" />
            <FormattedMessage id="aboutMe" />*/}
              <p className={styles.name}>Valentin Portillo Galvan</p>
              <p className={styles.intitle}>Software Developer</p>
              <div className={styles.smallDescription}>
                <p>I'm a Universidad Nacional Autónoma de México (UNAM) Graduate, right now looking for a master.</p>
                <p>
                  I've worked in Project Management, Business Analysis and Software Developement. 
                  Being Software Development my favorite and mainly working in back-end Developement.
                </p>
                <p>
                  Always interested in Computer Science deepening knowledge and challenges.
                </p>
              </div>
            </div>
          </div>  
        </a>      
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
