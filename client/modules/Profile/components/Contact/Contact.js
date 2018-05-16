import React, { PropTypes } from 'react';
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
          <form className={styles.form} action="/profile/sendMail" onSubmit={props.handleSentMail}>
            <p className={styles.inputCont}>
              <span className={styles.inputIcon}><i className="fas fa-user"></i></span>
              <FormattedMessage id="Name">
              {
                (txt) =>  (<input name="name" type="text" className={styles.feedbackInput} placeholder={txt} id="name" value={props.contactName} onChange={(event) => props.contactNameInput(event.target.value)} /> )
              }
              </FormattedMessage>
            </p>
            <p className={styles.inputCont}>
              <span className={styles.inputIcon}><i className="fas fa-at"></i></span>
              <FormattedMessage id="Email">
              {
                (txt) =>  (<input name="email" type="text" className={styles.feedbackInput} id="email" placeholder={txt} value={props.contactMail} onChange={(event) => props.contactEmailInput(event.target.value)} /> )
              }
              </FormattedMessage>
            </p>
            <p className={styles.inputCont}>
              <span className={styles.inputIcon}><i className="fas fa-industry"></i></span>
              <FormattedMessage id="Industry">
              {
                (txt) =>  (<input name="Industry" type="text" className={styles.feedbackInput} id="Industry" placeholder={txt}  /> )
              }
              </FormattedMessage>
            </p>
            <p className={styles.inputCont}>
              <span className={styles.inputIcon}><i className="far fa-hand-point-right"></i></span>
              <FormattedMessage id="WriteToMe">
              {
                (txt) =>  (<textarea name="text" className={styles.feedbackInput} id="comment" placeholder={txt} value={props.contactMess} onChange={(event) => props.contactMessInput(event.target.value)}></textarea>)
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
