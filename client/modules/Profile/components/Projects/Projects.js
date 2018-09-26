import React, { PropTypes } from 'react';

// Import Style
import styles from './Projects.css';

// Import Images
import pm_report from '../../../../images/Projects/pm_report.png';


function Projects(props, context) {
  return (
    <div>
      <div className={styles.Projects}>
        {/* 
          PSET7, 8, FINAL (cs50), TIMESTAMP, IMAGESEARCH,tictactoe, twich, urlshort, 
          who am i, mutuo financiera, VBA (Citi, ica, jacobs, mutuo)
        */}
        {/*
          photo
          technologies
          summary
          private/public
          approaches
          type. (academic, fintech...)
        */}

        <div className={styles.project_display}>
          <a href="https://youtu.be/wxJ1JsdVFV0" target="_blank">
            <div className={styles.project_alert}>
              <div className={styles.project_status}>
                <div className={styles.project_status_icon}>
                  <i className="fas fa-ban"></i>
                </div>
                <div className={styles.project_status_text}>
                  Sorry, private projects because of sensitive information, but there's a video :)
                </div>
              </div>
            </div>
          </a>
          <div className={styles.project_content}>
          
            
            <div className={styles.project_photo}>
              <img className={styles.project_photo} src={pm_report} />
            </div>
            <div className={styles.technologies}>
              <i className="fas fa-flask"></i> VBA, Excel
            </div>
            <div className={styles.worked_as}>
              <i className="far fa-address-card"></i> Project Manager / Software Engineer
            </div>
            <div className={styles.context}>
              <i className="fas fa-briefcase"></i> Project / Product Management
            </div>
            <div className={styles.description}>
              <i className="fas fa-comment"></i> In order to avoid errors and excel on projects follow up, I created in 
              ICA FLUOR, 
              Jacobs and 
              Citi Banamex 
              files like this one for myself as PM or to the PMOffice. 
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

/*
<div className="w-dyn-item w-col w-col-4">
  <a data-w-id="deef80b3-5eb9-c030-7f16-eed40bc18ab4" href="/projects/cooking-labs" className="thumb-proyectos w-inline-block" style="will-change: transform; transform: translateX(2.5005px) translateY(2.49965px) translateZ(0px) scaleX(1) scaleY(1) scaleZ(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skewX(0deg) skewY(0deg);">
    <img width="181" src="https://uploads-ssl.webflow.com/5a7495484f34370001335c75/5ae7422fd99a3d5c33d5d990_Thumb.jpg" className="thumb-proyectos-imagen" />
    <div className="thumbs-divcontent">
      <h3 className="heading-thumbs margen10">Cooking Labs</h3>
      <div className="text-block">Rural economic development through food innovation.</div>
    </div>
  </a>
</div>
*/

Projects.propTypes = {
};

export default Projects;
