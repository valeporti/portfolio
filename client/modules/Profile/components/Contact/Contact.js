import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Contact.css';

function Contact(props, context) {
  //console.log(props);
  return (
    <div className={styles.Contact}>
      <div className={styles.title}>{'{'} <FormattedMessage id="menuContact" /> {'}'}</div>
      <div className={styles.formMain}>
        <div className={styles.formDiv}>
          <form className={styles.form} action="/profile/sendMail" onSubmit={e=>props.handleSentMail(e)}>
            <p className={styles.inputCont}>
              <span className={styles.inputIcon}><i className="fas fa-user"></i></span>
              <FormattedMessage id="Name">
              {
                (txt) =>  (<input name="name" type="text" required className={styles.feedbackInput} placeholder={txt} id="name" value={props.contactName} onChange={(event) => props.contactNameInput(event.target.value)} /> )
              }
              </FormattedMessage>
            </p>
            <p className={styles.inputCont}>
              <span className={styles.inputIcon}><i className="fas fa-at"></i></span>
              <FormattedMessage id="Email">
              {
                (txt) =>  (<input name="email" type="text" required className={styles.feedbackInput} id="email" placeholder={txt} value={props.contactMail} onChange={(event) => props.contactEmailInput(event.target.value)} /> )
              }
              </FormattedMessage>
            </p>
            <p className={styles.inputCont}>
              <span className={styles.inputIcon}><i className="fas fa-industry"></i></span>
              <FormattedMessage id="Industry">
              {
                (txt) =>  (<input name="industry" type="text" className={styles.feedbackInput} id="industry" placeholder={txt} value={props.contactIndu} onChange={(event) => props.contactInduInput(event.target.value)} /> )
              }
              </FormattedMessage>
            </p>
            <p className={styles.inputCont}>
              <span className={styles.inputIcon}><i className="fas fa-thumbtack"></i></span>
              <FormattedMessage id="Purpose">
              {
                (txt) =>  (<input name="purpose" type="text" className={styles.feedbackInput} id="purpose" placeholder={txt} value={props.contactPurp} onChange={(event) => props.contactPurpInput(event.target.value)} /> )
              }
              </FormattedMessage>
            </p>
            <p className={styles.inputCont}>
              <span className={styles.inputIcon}><i className="far fa-hand-point-right"></i></span>
              <FormattedMessage id="WriteToMe">
              {
                (txt) =>  (<textarea name="text" required className={styles.feedbackInput} id="comment" placeholder={txt} value={props.contactMess} onChange={(event) => props.contactMessInput(event.target.value)}></textarea>)
              }
              </FormattedMessage>
            </p>
            <div className={styles.submit}>
              <FormattedMessage id="Send">
              {
                (txt) =>  (<input type="submit" value={txt} className={styles.button} />)
              }
              </FormattedMessage>
              <div className="ease"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

Contact.propTypes = {
};

export default Contact;
