import React, { PropTypes } from 'react';

// Import Style
import styles from './Projects.css';

// Import Images
import pm_report from '../../../../images/Projects/pm_report.png';
import p7 from '../../../../images/Projects/p7.png';
import p8 from '../../../../images/Projects/p8.png';
import cs50_final from '../../../../images/Projects/cs50_final.png';
import tic_tac_toe from '../../../../images/Projects/tic_tac_toe.png';


function Projects(props, context) {
  return (
    <div>
      <div className={styles.Projects}>
        {/* 
          TIMESTAMP, IMAGESEARCH, twich, urlshort, 
          who am i, mutuo financiera
        */}
        {/*
          photo
          technologies
          summary
          private/public
          approaches
          type. (academic, fintech...)
        */}

        {/* VBA (citi, ica, jacobs, mutuo) */}
        <div className={styles.project_display}>
          <a href="https://youtu.be/wxJ1JsdVFV0" target="_blank">
            <div className={styles.project_alert}>
              <div className={styles.project_status}>
                <div className={styles.project_status_icon_neg}>
                  <i className="fas fa-ban"></i>
                </div>
                <div className={styles.project_status_text}>
                  Sorry, private projects because of sensitive information, but there's a video :)
                </div>
              </div>
            </div>
          </a>
          <div className={styles.project_content}>
            <div className={styles.project_title}>
              {'{'} Project Management Tool Dev. {'}'}
            </div>
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

        {/* PSET7 */}
        <div className={styles.project_display}>
          <a href="https://cs50pset7-vp.herokuapp.com/" target="_blank">
            <div className={styles.project_alert}>
              <div className={styles.project_status}>
                <div className={styles.project_status_icon_pos}>
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className={styles.project_status_text}>
                  Click to See :)
                </div>
              </div>
            </div>
          </a>
          <div className={styles.project_content}>
            <div className={styles.project_title}>
              {'{'} <a className={styles.title_link} href="https://www.youtube.com/watch?v=cLSDylyk2MI" target="_blank"> CS50 Pset7 - Stock Exchange </a>{'}'}
            </div>
            <div className={styles.project_photo}>
              <img className={styles.project_photo} src={p7} />
            </div>
            <div className={styles.technologies}>
              <i className="fas fa-flask"></i> PHP, SQL, HTML, CSS, JS
            </div>
            <div className={styles.worked_as}>
              <i className="far fa-address-card"></i> Student
            </div>
            <div className={styles.context}>
              <i className="fas fa-briefcase"></i> Web development
            </div>
            <div className={styles.description}>
              <i className="fas fa-comment"></i> A project left 
              for the Pset7 during the CS50 course.
            </div>
          </div>
        </div>

        {/* PSET8 */}
        <div className={styles.project_display}>
          <a href="https://cs50pset8-vp.herokuapp.com/" target="_blank">
            <div className={styles.project_alert}>
              <div className={styles.project_status}>
                <div className={styles.project_status_icon_pos}>
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className={styles.project_status_text}>
                  Click to See :)
                </div>
              </div>
            </div>
          </a>
          <div className={styles.project_content}>
            <div className={styles.project_title}>
              {'{'}<a className={styles.title_link} href="https://www.youtube.com/watch?v=p1TmkL_FyP0" target="_blank"> CS50 Pset8 - Google Maps {'&'} Search </a>{'}'}
            </div>
            <div className={styles.project_photo}>
              <img className={styles.project_photo} src={p8} />
            </div>
            <div className={styles.technologies}>
              <i className="fas fa-flask"></i> PHP, SQL, HTML, CSS, JS, Google API
            </div>
            <div className={styles.worked_as}>
              <i className="far fa-address-card"></i> Student
            </div>
            <div className={styles.context}>
              <i className="fas fa-briefcase"></i> Web development
            </div>
            <div className={styles.description}>
              <i className="fas fa-comment"></i> A project left 
              for the Pset8 during the CS50 course.
            </div>
          </div>
        </div>

        {/* FINAL */}
        <div className={styles.project_display}>
          <a href="https://cs50final-vp.herokuapp.com/" target="_blank">
            <div className={styles.project_alert}>
              <div className={styles.project_status}>
                <div className={styles.project_status_icon_pos}>
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className={styles.project_status_text}>
                  Click to See :)
                </div>
              </div>
            </div>
          </a>
          <div className={styles.project_content}>
            <div className={styles.project_title}>
              {'{'} <a className={styles.title_link} href="https://www.youtube.com/watch?v=h7MBIub-5ao" target="_blank"> CS50 Final - Final Project </a> {'}'}
            </div>
            <div className={styles.project_photo}>
              <img className={styles.project_photo} src={cs50_final} />
            </div>
            <div className={styles.technologies}>
              <i className="fas fa-flask"></i> PHP, SQL, HTML, CSS, JS
            </div>
            <div className={styles.worked_as}>
              <i className="far fa-address-card"></i> Student
            </div>
            <div className={styles.context}>
              <i className="fas fa-briefcase"></i> Web development
            </div>
            <div className={styles.description}>
              <i className="fas fa-comment"></i> The final project, 
              I chose to do a coffee management software. If you want to 
              understand its functionaliity, watch
              the video, <b>click in the title</b>.
            </div>
          </div>
        </div>

        {/* Tic Tac Toe */}
        <div className={styles.project_display}>
          <a href="https://tictactoe-vp.herokuapp.com/" target="_blank">
            <div className={styles.project_alert}>
              <div className={styles.project_status}>
                <div className={styles.project_status_icon_pos}>
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className={styles.project_status_text}>
                  Click to Play :)
                </div>
              </div>
            </div>
          </a>
          <div className={styles.project_content}>
            <div className={styles.project_title}>
              {'{'} Tic-Tac-Toe Game {'}'}
            </div>
            <div className={styles.project_photo}>
              <img className={styles.project_photo} src={tic_tac_toe} />
            </div>
            <div className={styles.technologies}>
              <i className="fas fa-flask"></i> HTML, CSS, JS
            </div>
            <div className={styles.worked_as}>
              <i className="far fa-address-card"></i> Student
            </div>
            <div className={styles.context}>
              <i className="fas fa-briefcase"></i> Artificial Inteligence Principles
            </div>
            <div className={styles.description}>
              <i className="fas fa-comment"></i> When studing the IA principles,
              this was a project to preactice and understand better this example.
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
