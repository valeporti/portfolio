import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import styles from './Projects.css';


/**
 * 
 * @param {{ is_available, all_is_link, status, links:Array<{href, text}>, id_title, img_photo, languages, id_role, id_context, id_description }} props 
 * @param {*} context 
 */
export default function Project(props, context) {

  const { is_available, all_is_link, status, links, id_title, img_photo, languages, id_role, id_context, id_description } = props

  return (
    <div className={styles.project_display}>
      { (all_is_link)? 
        <a href="https://youtu.be/wxJ1JsdVFV0" target="_blank">
          <div className={styles.project_alert}>
            <div className={styles.project_status}>
              <div className={styles.project_status_icon_neg}>
                { (is_available)? <i className="fas fa-check-circle" />:<i className="fas fa-ban" /> }
              </div>
              <div className={styles.project_status_text}>
                <FormattedMessage id="project_pm_status" />
              </div>
            </div>
          </div>
        </a>
        :
        <div>
          <div className={styles.project_alert}>
            <div className={styles.project_status}>
              <div className={styles.project_status_icon_pos}>
                { (is_available)? <i className="fas fa-check-circle" />:<i className="fas fa-ban" /> }
              </div>
              <div className={styles.project_status_text}>
                <FormattedMessage id={status} />
                <hr className={`${styles.p_squeeze}`}></hr>
                { links.map(e=>e) }
              </div>
            </div>
          </div>
        </div>
      }
      
      
      <div className={styles.project_content}>
        <div className={styles.project_title}>
          {'{'} <FormattedMessage id={id_title}/> {'}'}
        </div>
        <div className={styles.project_photo} >
          { img_photo }
        </div>
        <div className={styles.technologies}>
          <i className="fas fa-flask"></i>{languages}
        </div>
        <div className={styles.worked_as}>
          <i className="far fa-address-card"></i> <FormattedMessage id={id_role} />
        </div>
        <div className={styles.context}>
          <i className="fas fa-briefcase"></i> <FormattedMessage id={id_context} />, 
        </div>
        <div className={styles.description}>
          <i className="fas fa-comment"></i> <FormattedMessage id={id_description} />
        </div>
      </div>
    </div>
  )
}