import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import axios from 'axios';

//Import Components
import HardSkills from './components/HardSkills/HardSkills';
import SoftSkills from './components/SoftSkills/SoftSkills';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import About from './components/About/About';

// Import Style
import styles from './Profile.css';

// Import Images
import first_image from '../../images/code.jpg';

//Other funcitonalities
import VisibilitySensor from 'react-visibility-sensor';

//Import Actions 
import { toggleActiveHS, contactNameInput, contactEmailInput, contactMessInput, contactInduInput, contactPurpInput } from './ProfileActions';
import { METHODS } from 'http';

class Profile extends Component {
  constructor (props) {
    //console.log(props);
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
  contactInduInput = (text) => {
    this.props.contactInduInput(text);
  }
  contactPurpInput = (text) => {
    this.props.contactPurpInput(text);
  }
  pueba = (text) => {
    console.log(text);
  }
  handleSentMail = (event) => {
    event.preventDefault();
    console.log('in handle');
    console.log(this.props);
    const data = {
      name: this.props.prof.contactName,
      mail: this.props.prof.contactMail,
      mess: this.props.prof.contactMess,
      indu: this.props.prof.contactIndu,
      purp: this.props.prof.contactPurp,
    };
    const contactMessInput = this.props.contactMessInput;
    const contactEmailInput = this.props.contactEmailInput;
    const contactNameInput = this.props.contactNameInput;
    const contactInduInput = this.props.contactInduInput;
    const contactPurpInput = this.props.contactPurpInput;
    axios({
        method: 'get',
        url: '/profile/sendMail',
        params: data
      })
      .then(function (response) {
        if (response.status == 200 && response.data.hasOwnProperty('success')) {
          console.log('too bien');
          contactMessInput('Message Sent!');
          contactEmailInput('');
          contactNameInput('');
          contactInduInput('');
          contactPurpInput('');
        } else {
          console.log('NOOOO');
        }
        console.log(response);
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error);
      });

  }

  render() {
    return (
      <div className={styles.Profile}>
        <a name="About">
          <div className={styles.fastAbout}>
            <About />
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
              contactPurpInput={this.contactPurpInput}
              contactPurp={this.props.prof.contactPurp}
              contactInduInput={this.contactInduInput}
              contactIndu={this.props.prof.contactIndu}
              handleSentMail={this.handleSentMail}
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
    contactInduInput: (text) => {
      dispatch(contactInduInput(text))
    },
    contactPurpInput: (text) => {
      dispatch(contactPurpInput(text))
    },
  };
};

Profile.propTypes = {

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
