import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

//Import Components
import HardSkills from './components/HardSkills/HardSkills';
import SoftSkills from './components/SoftSkills/SoftSkills';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';

// Import Style
import styles from './Profile.css';

// Import Images
import first_image from '../../images/code.jpg';

//Other funcitonalities
import VisibilitySensor from 'react-visibility-sensor';

//Import Actions 
import { toggleActiveHS, contactNameInput, contactEmailInput, contactMessInput } from './ProfileActions';

class Profile extends Component {
  constructor (props) {
    console.log(props);
    super(props);
    
  }
  toggleActiveHS = (isVisible) => {
    this.props.toggleActiveHS(isVisible);
  }
  contactNameInput = (text) => {
    this.props.contactNameInput(text);
  }
  contactEmailInput = (text) => {
    this.props.contactEmailInput(text);
  }
  contactMessInput = (text) => {
    this.props.contactMessInput(text);
  }

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
        <a name="Skills">
          <div className={styles.skillsSec}>
            <SoftSkills />
            <VisibilitySensor onChange={this.toggleActiveHS} partialVisibility={true} minTopValue={100}>
              <HardSkills toggleActiveHS={this.toggleActiveHS} isVisible={this.props.prof.activeHS} />
            </VisibilitySensor>
          </div>
        </a>  
        <a name="Resume">
          <div className={styles.ResumeSec}>
            <Resume />
          </div>
        </a>  
        <a name="Contact">
          <div className={styles.ContactSec}>
            <Contact 
              contactNameInput={this.contactNameInput} 
              contactName={this.props.prof.contactName}
              contactEmailInput={this.contactEmailInput} 
              contactMail={this.props.prof.contactMail}
              contactMessInput={this.contactMessInput}
              contactMess={this.props.prof.contactMess}
            />
          </div>
        </a>  
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //console.log(state.prof);
  return {
    prof: state.prof,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleActiveHS: (bool) => {
      dispatch(toggleActiveHS(bool))
    },
    contactNameInput: (text) => {
      dispatch(contactNameInput(text))
    },
    contactEmailInput: (text) => {
      dispatch(contactEmailInput(text))
    },
    contactMessInput: (text) => {
      dispatch(contactMessInput(text))
    },
  };
};

Profile.propTypes = {

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
