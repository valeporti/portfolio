import React, { PropTypes } from 'react';

// Import Style
import styles from './Contact.css';

function Contact(props, context) {
  console.log(props);
  return (
    <div className={styles.Contact}>
      <div className={styles.title}>{'{'} Contact {'}'}</div>
      <div className={styles.formMain}>
        <div className={styles.formDiv}>
          <form className={styles.form}>
            <p className={styles.inputCont}>
              <span className={styles.inputIcon}><i className="fas fa-user"></i></span>
              <input name="name" type="text" className={styles.feedbackInput} placeholder="Name" id="name" value={props.contactName} onChange={(event) => props.contactNameInput(event.target.value)} />
            </p>
            <p className={styles.inputCont}>
              <span className={styles.inputIcon}><i className="fas fa-at"></i></span>
              <input name="email" type="text" className={styles.feedbackInput} id="email" placeholder="Email" value={props.contactMail} onChange={(event) => props.contactEmailInput(event.target.value)} />
            </p>
            <p className={styles.inputCont}>
              <span className={styles.inputIcon}><i className="fas fa-industry"></i></span>
              <input name="Industry" type="text" className={styles.feedbackInput} id="Industry" placeholder="Industry"  />
            </p>
            <p className={styles.inputCont}>
              <span className={styles.inputIcon}><i className="far fa-hand-point-right"></i></span>
              <textarea name="text" className={styles.feedbackInput} id="comment" placeholder="About Yourself and your Business" value={props.contactMess} onChange={(event) => props.contactMessInput(event.target.value)}></textarea>
            </p>
            <div className="submit">
              <input type="submit" value="SEND" className={styles.button} />
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
