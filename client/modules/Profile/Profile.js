import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

//Import Components
import HardSkills from './components/HardSkills/HardSkills';
import SoftSkills from './components/SoftSkills/SoftSkills';

// Import Style
import styles from './Profile.css';

// Import Images
import first_image from '../../images/code.jpg';

//Other funcitonalities
import VisibilitySensor from 'react-visibility-sensor';

//Import Actions 
import { toggleActiveHS } from './ProfileActions';

class Profile extends Component {
  constructor (props) {
    //console.log(props);
    super(props);
    
  }
  toggleActiveHS = (isVisible) => {
    console.log(isVisible);
    this.props.toggleActiveHS(isVisible);
  }

  render() {
    //let VisibilitySensor = require('react-visibility-sensor');
    //let whenVisible = (isVisible) => {
      //!this.props.activeHS;
    //}
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
        <a name="Skills">
          <div className={styles.skillsSec}>
            <SoftSkills />
            <VisibilitySensor onChange={this.toggleActiveHS} partialVisibility={true} minTopValue={100}>
            <HardSkills toggleActiveHS={this.toggleActiveHS} isVisible={this.props.prof.activeHS} />
            </VisibilitySensor>
          </div>
        </a>    
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    prof: state.prof,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleActiveHS: (bool) => {
      dispatch(toggleActiveHS(bool))
    },
  };
};

Profile.propTypes = {

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
